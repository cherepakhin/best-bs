import { CONST_ACTION, INITVAR } from '../../../constants.js';
import fetch from 'isomorphic-fetch';
import mapDlg from '../mapDlg.js';

let fnOk = function (doc, modalType) {
  return (dispatch) => {
    dispatch({ type: CONST_ACTION.PROGRESS_SHOW });
    let dlg = mapDlg.get(modalType);

    let nameDiscount = dlg.title;
    let body = 'docN=' + encodeURIComponent(JSON.stringify(doc.n)) +
        '&nameDiscount=' + encodeURIComponent(nameDiscount);

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

export default fnOk;
