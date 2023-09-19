import fetch from 'isomorphic-fetch';

import { CONST_ACTION, INITVAR, getHeaderForJSON } from '../constants';
import mapDlg from '../components/dlg/mapDlg.js';

/**
 * Удаление скидки
 * @param  {object} discount скидка {n,name,summa}
 * @return {[type]}          [description]
 */
export const del = function (discount) {
  return (dispatch) => {
    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });

    return fetch(INITVAR.URL_SERVER + '/discount/del', getHeaderForJSON({ n: discount.n }))
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        if (json.message !== undefined && json.message !== '') {
          mapDlg.get(CONST_ACTION.DLG_MESSAGE)
          .show(dispatch, json.message);
        }

        dispatch({
          type: CONST_ACTION.SET_DOC,
          payload: json
        });
        dispatch({
          type: CONST_ACTION.PROGRESS_HIDE
        });
      })
      .catch(function (ex) {
        console.log('Failed delete discount /discount/del', ex);
      });
  };
};
