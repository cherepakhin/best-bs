import { CONST_ACTION, INITVAR } from '../../../constants.js';
import fetch from 'isomorphic-fetch';
import mapDlg from '../mapDlg.js';

/**
 * Обработка запроса скидки на сумму
 * @param  {[type]} doc       [description]
 * @param  {[type]} modalType [description]
 * @param  {[type]} summa     [description]
 * @return {[type]}           [description]
 */
export let ok = function (doc, modalType, summa) {
  return (dispatch) => {
    dispatch({ type: CONST_ACTION.PROGRESS_SHOW });
    let param = [{
      name: 'Сумма',
      param: summa
    }];
    let dlg = mapDlg.get(modalType);
    let nameDiscount = dlg.title;
    let body = 'docN=' + encodeURIComponent(JSON.stringify(doc.n)) +
    '&nameDiscount=' + encodeURIComponent(nameDiscount) +
    '&param=' + encodeURIComponent(JSON.stringify(param));

    return fetch(INITVAR.URL_SERVER + '/discount.ctrl/apply', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: body

    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch({ type: CONST_ACTION.CLOSE_DIALOG });
      dispatch({
        type: CONST_ACTION.SET_DOC,
        payload: {
          doc: json
        }
      });
      dispatch({ type: CONST_ACTION.PROGRESS_HIDE });
    }).catch(function (ex) {
      console.log('Failed create doc /discount.ctrl/apply', ex);
    });
  };
};
