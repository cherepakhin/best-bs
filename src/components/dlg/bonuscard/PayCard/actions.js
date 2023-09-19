import { CONST_ACTION, INITVAR } from '../../../../constants.js';

import fetch from 'isomorphic-fetch';
import mapDlg from '../../mapDlg.js';

/**
 * Обработка запроса пополнения бонусной карты
 * @param  {[type]} doc       [description]
 * @param  {[type]} stroke    Штрих карты
 * @return {[type]}           [description]
 */
const fnOk = function (doc, stroke) {
  return (dispatch) => {
    dispatch({ type: CONST_ACTION.PROGRESS_SHOW });
    let body = 'docN=' + encodeURIComponent(JSON.stringify(doc.n)) +
        '&stroke=' + encodeURIComponent(stroke);

    return fetch(INITVAR.URL_SERVER + '/bonuscard.ctrl/increase', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
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

        dispatch({ type: CONST_ACTION.CLOSE_DIALOG });
        dispatch({
            type: CONST_ACTION.SET_DOC,
            payload: {
                doc: json
              }
          });
        dispatch({ type: CONST_ACTION.PROGRESS_HIDE });
      }).catch(function (ex) {
        console.log('Failed /bonuscard.ctrl/increase', ex);
      });

  };
};

export default fnOk;
