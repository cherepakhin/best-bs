import { CONST_ACTION } from '../constants';

let nullGroupT = {
    n: 0,
    name: ' -',
    featuresForGroupT: []
  };

let initialState = {
  onRest: true,   // искать только в остатках
  orderPrices: 'цене(по возрастанию)',
  prices: [],
  selectedGroupT: nullGroupT,

  searchString: '', // строка поиска товара
  queryFeature: [] // запрос по хар-м
};

/**
 * Сортировка прайсов
 * @param  {string} order  порядок сортировки
 * @param  {array} prices прайсы
 * @return {[type]}        [description]
 */
const sortPrices = function (order, prices) {
  console.log(order)
  if (order === '' || order === 'по названию') {
    console.log('sort by name')
    let sortByName = function (price1, price2) {
      if (price1.product.name > price2.product.name) {
        return 1;
      }

      if (price1.product.name < price2.product.name) {
        return -1;
      }

      return 0;
    };

    return prices.sort(sortByName);
  } else {
    let sortVal = 1;
    if (order === 'цене(по возрастанию)') {
      sortVal = 1;
    } else {
      sortVal = -1;
    }

    let sortByPrice = function (price1, price2) {
      if (price1.cena * 1 > price2.cena * 1) {
        return 1 * sortVal;
      }

      if (price1.cena * 1 < price2.cena * 1) {
        return -1 * sortVal;
      }

      return 0;
    };

    // console.log(prices);
    return prices.sort(sortByPrice);
  }
};

const saleReducer = function (state = initialState, action) {
  switch (action.type) {

  /*  case CONST_ACTION.GET_GROUPT:
      return { ...state, groups: action.payload.groups };*/
  case CONST_ACTION.SELECT_GROUPT:
    // console.log(state.onRest);
    return {
      ...state,
      selectedGroupT: action.payload.selectedGroupT,
      prices: [],
      searchString: '',
      queryFeature: []
    };

  case CONST_ACTION.GET_PRICES: {
    // console.log(state.onRest);
    // console.log(action);
    let newPrices = sortPrices(state.orderPrices, action.payload.prices);

    let selGroupT = state.selectedGroupT;
    let queryFeature = state.queryFeature;
    if (action.payload.searchString != undefined && action.payload.searchString != '') {
      selGroupT = nullGroupT;
      queryFeature = [];
    } else {
      if (action.payload.queryFeature != undefined) {
        queryFeature = action.payload.queryFeature;
      }
    }

    return {
      ...state,
      prices: newPrices,
      searchString: action.payload.searchString,
      queryFeature: queryFeature,
      selectedGroupT: selGroupT
    };
  }

  case CONST_ACTION.RESORT_PRICES: {
    return {
      ...state,
      prices: sortPrices(action.payload, state.prices),
      orderPrices: action.payload
    };
  }

  case CONST_ACTION.SET_ON_REST:
    return {
      ...state,
      onRest: action.payload.onRest

    };

  /*  case CONST_ACTION.ADD_TO_DOC:
      return {
        ...state,
        doc: action.payload
      };
  */
  /*  case CONST_ACTION.SET_DOC: {
      let doc = action.payload.doc;
      doc.message = '';
      return {
        ...state,
        doc: doc
      };
    }
  */
  default:
    return state;
}

};

export {saleReducer, sortPrices};
