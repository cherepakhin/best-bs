import fetch from 'isomorphic-fetch';

import { CONST_ACTION, INITVAR, getHeaderForJSON } from '../constants';
import mapDlg from '../components/dlg/mapDlg.js';
import { browserHistory } from 'react-router';
import { convertDocToJS } from './ConvertDoc.js';


/**
 * Получение док-в на дату
 * @param  {Date} ddate дата
 * @return {[type]}       [description]
 */
export let getByDate = function (ddate) {
  return (dispatch) => {

    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });
    let humanDate = ddate.slice(0, 10);
    return fetch(INITVAR.URL_SERVER + '/doc/get_by_filter/', getHeaderForJSON({ ddate: humanDate }))
    .then(function (response) {
      return response.json();
    }).then(function (items) {
      if (items.message !== undefined && items.message !== '') {
        mapDlg.get(CONST_ACTION.DLG_MESSAGE).show(dispatch, items.message);
      }

      let docs = items.map(convertDocToJS);

      dispatch({
        type: CONST_ACTION.SELECT_DATE_DOC,
        payload: {
          docs: docs,
          ddate: ddate
        }
      });

      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
    }).catch(function (ex) {
      console.log('Failed create doc /doc/getByDate/', ex);
    });
  };
};

export let getDocByN = function (docN) {
  return (dispatch) => {

    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });

    return fetch(INITVAR.URL_SERVER + '/doc/' + docN + '/', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(function (response) {
      return response.json();
    }).then(function (doc) {
      if (doc.message !== undefined && doc.message !== '') {
        mapDlg.get(CONST_ACTION.DLG_MESSAGE).show(dispatch, doc.message);
      }

      // console.log(doc);
      let newDoc = convertDocToJS(doc);

      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: newDoc
      });

      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });

      browserHistory.push('/doc');
    }).catch(function (ex) {
      console.log('Failed create doc /doc/getDocByN', ex);
    });
  };
};

