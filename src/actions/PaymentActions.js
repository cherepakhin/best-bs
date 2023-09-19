import fetch from 'isomorphic-fetch';
import { CONST_ACTION, INITVAR, getHeaderForJSON } from '../constants';
import mapDlg from '../components/dlg/mapDlg.js';
import { convertDocToJS } from './ConvertDoc.js';
import { convertPaymentToJS } from './ConvertPayment.js';

export let del = function (payment) {
  return (dispatch) => {
    return fetch(INITVAR.URL_SERVER + '/payment/' + payment.n + '/',
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch({
        type: CONST_ACTION.DELETE_PAYMENT,
        payload: payment
      });
      let newDoc = convertDocToJS(json);
      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: newDoc
      });
    }).catch(function (ex) {
      let err = `'Failed delete payment ${payment.n}.Error: ${ex.message} `;
      console.log(err);
      mapDlg.get(CONST_ACTION.DLG_MESSAGE)
      .show(dispatch, err);
    });
  };
};

export let create = function (doc, payment) {
  return (dispatch) => {
    // TODO: Костыль. Не знаю как вызвать dispatch из диалога
    dispatch({ type: CONST_ACTION.CLOSE_DIALOG });
    payment.doc = doc;
    let payData = {
      docN: doc.n,
      summa: payment.summa,
      typePayment: payment.typePayment
    };
    return fetch(INITVAR.URL_SERVER + '/payment/paysale/', getHeaderForJSON(payData))
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      // console.log(json);
      let newDoc = convertDocToJS(json);
      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: newDoc
      });
    }).catch(function (ex) {
      let err = 'Failed create doc /payment/paysale/.' + ex.message;
      console.log(err);
      mapDlg.get(CONST_ACTION.DLG_MESSAGE)
      .show(dispatch, err);
      return;
    });
  };
};

export let getByDate = function (ddate) {
  return (dispatch) => {
    let normalDdate = ddate.slice(0, 10);

    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });
    return fetch(INITVAR.URL_SERVER + '/payment/getByDate/', getHeaderForJSON({ ddate: normalDdate }))
    .then(function (response) {
      return response.json();
    }).then(function (items) {
      if (items.message !== undefined && items.message !== '') {
        mapDlg.get(CONST_ACTION.DLG_MESSAGE).show(dispatch, { message: items.message });
        return;
      }

      let payments = items.map(function (payment) {
        return convertPaymentToJS(payment);
      });

      dispatch({
        type: CONST_ACTION.SELECT_DATE_PAYMENT,
        payload: {
          payments: payments,
          ddate: normalDdate
        }
      });
      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
    }).catch(function (ex) {
      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
      let err = 'Failed create doc /payment/getByDate/.' + ex.message;
      mapDlg.get(CONST_ACTION.DLG_MESSAGE).show(dispatch, { message: err });
      return;
    });
  };
};
