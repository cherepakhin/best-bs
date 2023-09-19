import { CONST_ACTION, INITVAR } from '../constants';
import fetch from 'isomorphic-fetch';

/**
 * Отбор прайсов по названию товара
 * @param  {string} nameProduct поисковая фраза
 * @param  {boolean} onRest   с остатков
 * @return {[type]}          [description]
 */
const getByName = function (nameProduct, onRest) {
  return (dispatch) => {
    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });
    /*    let body = 'searchname=' + encodeURIComponent(nameProduct) +
        '&onrest=' + encodeURIComponent(onRest);*/
    let body = JSON.stringify({
      name: nameProduct,
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
    }).then(function (json) {
      // console.log(json);
      dispatch({
        type: CONST_ACTION.GET_PRICES,
        payload: {
          prices: json,
          queryFeature: [],
          searchString: nameProduct
        }
      });
      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
    }).catch(function (ex) {
      console.log('Failed get prices /price/getByName/', ex);
    });

  };
};

/**
 * Получение прайсов
 * @param  {object} groupT  Группа {n:0, name: '????'}
 * @param  {query} queryFeature параметры фильтра
 *                              [
 *                                {name: 'nameFeature1',vals: ['val1','val2']},
 *                                {name: 'nameFeature2',vals: ['val1']},
 *                              ]
 * @param  {boolean} onRest     с остатков
 * @return {[type]}              [description]
 */
const getByFilter = function (groupT, queryFeature, onRest) {
  return (dispatch) => {
    dispatch({
      type: CONST_ACTION.PROGRESS_SHOW
    });
    let body = JSON.stringify({
      groupt: groupT.name,
      filter: queryFeature,
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
    }).then(function (json) {
      // console.log(queryFeature);
      dispatch({
        type: CONST_ACTION.GET_PRICES,
        payload: {
          prices: json,
          queryFeature: queryFeature,
          searchString: ''
        }
      });
      dispatch({
        type: CONST_ACTION.PROGRESS_HIDE
      });
    }).catch(function (ex) {
      console.log('Failed get prices /price/getByFilter/', ex);
    });

  };
};

/**
 * Сортировка товаров
 * @param  {string} order 'По названию','Цене'
 * @return {[type]}       [description]
 */
const resort = function (order) {
  return {
    type: CONST_ACTION.RESORT_PRICES,
    payload: order
  };
};

const setOnRest = function (onRest, fnGetByFilter=getByFilter) {
  return (dispatch, getState) => {
    dispatch({
      type: CONST_ACTION.SET_ON_REST,
      payload: {
        onRest: onRest
      }
    });

    // Достаю из store строку поиска для проверки по какому признаку фильтровать
    let searchString = getState().sale.searchString;
    if (searchString != undefined && searchString != '') {
      return getByName(searchString, onRest)(dispatch);
    }

    // if (getState().sale.selectedGroupT) {
    let queryFeature = getState().sale.queryFeature;
    let selectedGroupT = getState().sale.selectedGroupT;
    return fnGetByFilter(selectedGroupT, queryFeature, onRest)(dispatch);
    // }

  };

};

export {getByFilter, getByName, resort, setOnRest};
