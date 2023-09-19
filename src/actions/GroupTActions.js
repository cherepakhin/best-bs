import { CONST_ACTION, INITVAR } from '../constants';
import fetch from 'isomorphic-fetch';

/**
 * Получение хар-к группы и товаров (если нет осн.хар-к)
 * @param groupT
 * @param onRest
 * @param {function} fnAfterGetGroupT - функцию вызвать после получения группы.
 * Сделал для тестов. Можно было просто вызвать отображение прайсов.
 * @returns {function(*)}
 */
export const selectGroupT = function (groupT, onRest = true, fnAfterGetGroupT=getAllPricesByGroupT) {
  return (dispatch) => {
    return fetch(INITVAR.URL_SERVER + '/groupt/' + groupT.n + '/', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (receiveGroupT) {
      // groupT = { ...groupT, featuresForGroupT: jsonGroupT.featureTempls };
      dispatch({
        type: CONST_ACTION.SELECT_GROUPT,
        payload: {
          selectedGroupT: receiveGroupT
        }
      });
      dispatch(fnAfterGetGroupT(receiveGroupT, onRest));
    }).catch(function (ex) {
      console.log('Failed get groups /groupt/%s/ Exception: %s', groupT.n, ex);
    });
  };
};

/**
* Получение товаров если у группы нет основных хар-к. Вывалить все товары группы
* @param groupT
* @param onRest
* @returns {function(*)}
*/
export const getAllPricesByGroupT = function (groupT, onRest = true) {
  return dispatch => {
    if (groupT.featuresForGroupT === undefined || groupT.featuresForGroupT.length == 0) {
      dispatch({
        type: CONST_ACTION.PROGRESS_SHOW
      });
      let body = JSON.stringify({
        groupt: groupT.name,
        filter: [],
        onrest: onRest
      });

      return fetch(INITVAR.URL_SERVER + '/price/getByFilter/', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: body

      }).then(function (response) {
        return response.json();
      }).then(function (prices) {
        // console.log('prices');
        // console.log(prices);
        //
        dispatch({
          type: CONST_ACTION.GET_PRICES,
          payload: {
            prices: prices
          }
        });
        dispatch({
          type: CONST_ACTION.PROGRESS_HIDE
        });
      }).catch(function (ex) {
        console.log('Failed get prices /price/getByFilter/', ex);
      });
    }
  };
};

