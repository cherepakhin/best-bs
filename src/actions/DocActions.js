import fetch from 'isomorphic-fetch';
import { CONST_ACTION, INITVAR, getHeaderForJSON } from '../constants';
import mapDlg from '../components/dlg/mapDlg.js';
import { convertDocToJS } from './ConvertDoc.js';

/**
* Добавить товар в выписку
* @param {doc} выписка
* @param {price} добавляемый товар
* @returns {function(*)}
*/

export const addDocItem = function (doc, price) {
  return dispatch => {
    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });
    return fetch(INITVAR.URL_SERVER + '/doc/add_sale_docitem/', getHeaderForJSON({
      doc: {
        n: doc.n,
        typeDoc: 'Продажа'
      },
      product: {
        n: price.product.n
      },
      qty: 1,
      cena: price.cena
    })
    ).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.message !== undefined && json.message !== '') {
        mapDlg.get(CONST_ACTION.DLG_MESSAGE)
        .show(dispatch, json.message);
      }

      let newDoc = convertDocToJS(json);

      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: newDoc
      });
      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
    }).catch(function (ex) {
      //TODO вывести диалог
      console.log('Failed create doc /doc/add_sale_docitem/', ex);
    });
  };
};

export const deleteDocItem = function (docItem) {
  return (dispatch) => {
    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });
    /*    let body = 'docN=' + encodeURIComponent(JSON.stringify(doc.n)) +
        '&docItemN=' + encodeURIComponent(JSON.stringify(docItem.n));
    */
    /*    return fetch(INITVAR.URL_SERVER + '/doc/delete_doc_item/', getHeaderForJSON({
          docItemN: docItem.n
        })
    */
    return fetch(INITVAR.URL_SERVER + '/docitem/' + docItem.n + '/', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(function (response) {
      return response.json();})
    .then(function (json) {
      // Console.log(json);
      let newDoc = convertDocToJS(json);
      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: newDoc
      });
      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
    }).catch(function (ex) {
      console.log('Failed create doc /doc/delete_doc_item/', ex);
    });
  };
};

/**
 * Закрытие документа. Нужно для ввода нового док-та
 * @param  {[type]} docItem [description]
 * @return {[type]}         [description]
 */
export const closeDoc = function () {
  return (dispatch) => {
    let nullDoc = {
      n: 0,
      ddate: new Date().toISOString().slice(0, 10),
      summaOut: 0,
      docItems: [],
      payments: [],
      discounts: [],
      bonus: 0
    };
    dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: nullDoc
      });
  };
};

// TODO: Не протестировано. Ошибка на сохранении. Не нужно сохранять.
/**
 * Получение pdf документа
 * @param  {object} doc        документ
 * @param  {string} nameReport название отчета
 * @return {[type]}            [description]
 */
export const printToPdf = function (doc, nameReport) {
  return (dispatch) => {
    let body = 'doc=' + encodeURIComponent(JSON.stringify(doc));
    return fetch(INITVAR.URL_SERVER + '/doc/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, *!/!*',
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: body
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.message !== undefined && json.message !== '') {
        mapDlg.get(CONST_ACTION.DLG_MESSAGE)
        .show(dispatch, json.message);
      }

      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: json
      });
      return json;
    }).then(function (json) {
      let body = 'doc=' + encodeURIComponent(JSON.stringify(json)) +
      '&nameReport=' + encodeURIComponent(nameReport);
      return fetch(INITVAR.URL_SERVER + '/doc/report', {
        method: 'POST',
        headers: {
          Accept: '*!/!*',
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: body
      }).then(function (response) {
        dispatch({
          type: CONST_ACTION.PROGRESS_HIDE
        });
        return response.blob();
      }).then(function (blob) {
        var file = new Blob([blob], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }).catch(function (ex) {
        console.log('parsing failed', ex);
        mapDlg.get(CONST_ACTION.DLG_MESSAGE)
        .show(dispatch, 'parsing failed' + ex.message);
      });
    });
  };
};
