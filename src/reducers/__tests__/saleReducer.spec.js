import { saleReducer } from '../saleReducer.js';
import { CONST_ACTION } from '../../constants';

let defaultState = {
  onRest: true,
  orderPrices: 'цене(по возрастанию)',
  prices: [],
  selectedGroupT: {
    n: 0,
    name: ' -',
    featuresForGroupT: []
  },
  searchString: '', // строка поиска товара
  queryFeature: [] // запрос по хар-м
};

let price1 = {
  product: {
    n: 1,
    name: 'Товар1'
  },
  cena: 2
};
let price2 = {
  product: {
    n: 2,
    name: 'Товар2'
  },
  cena: 1
};

describe('saleReducer', () => {
  it('default init', () => {
    expect(
    saleReducer(undefined, {})
    ).toEqual(defaultState);
  });

  it('Выбор группы. CONST_ACTION.SELECT_GROUPT', ()=> {
    let selectedGroupT = {
      n: 1,
      name: 'Выбранная группа',
      featuresForGroupT: []
    };

    let oldState = {
      prices: [{
        product: {
          n: 1,
          name: 'Товар1'
        }
      }],
      selectedGroupT: {
        n: 2,
        name: 'Старая группа',
        featuresForGroupT: []
      }
    };

    let actualState = saleReducer(oldState, {
      type: CONST_ACTION.SELECT_GROUPT,
      payload: {
        selectedGroupT: selectedGroupT
      }
    });
    expect(actualState.selectedGroupT).toEqual(selectedGroupT);

    // Выбрана группа. Список товаров должен быть пустым
    expect(actualState.prices.length).toBe(0);
  });

  it('Получение и сортировка товаров. CONST_ACTION.GET_PRICES', ()=> {
    let oldState = {
      orderPrices: 'по названию',
      prices: []
    };
    let actualState = saleReducer(oldState, {
      type: CONST_ACTION.GET_PRICES,
      payload: {
        prices: [price1, price2]
      }
    });
    expect(actualState.prices).toEqual([price1, price2]);

    oldState = {
      orderPrices: 'цене(по возрастанию)',
      prices: []
    };
    actualState = saleReducer(oldState, {
      type: CONST_ACTION.GET_PRICES,
      payload: {
        prices: [price1, price2]
      }
    });
    expect(actualState.prices).toEqual([price2, price1]);
  });

  it('Сортировка загруженных товаров. CONST_ACTION.RESORT_PRICES', ()=> {
    let oldState = {
      orderPrices: 'по названию',
      prices: [price1, price2]
    };
    let actualState = saleReducer(oldState, {
      type: CONST_ACTION.RESORT_PRICES,
      payload: 'цене(по возрастанию)'
    });
    expect(actualState.prices).toEqual([price2, price1]);
    expect(actualState.orderPrices).toEqual('цене(по возрастанию)');

    oldState = {
      orderPrices: 'цене(по возрастанию)',
      prices: [price2, price1]
    };
    actualState = saleReducer(oldState, {
      type: CONST_ACTION.RESORT_PRICES,
      payload: 'по названию'
    });
    expect(actualState.prices).toEqual([price1, price2]);
    expect(actualState.orderPrices).toEqual('по названию');
  });

  it('Установка флага "Есть на остатках ".CONST_ACTION.SET_ON_REST', () => {
    let actualState = saleReducer({ onRest: false }, {
      type: CONST_ACTION.SET_ON_REST,
      payload: {
        onRest: true
      }
    });
    expect(actualState.onRest).toBe(true);

    actualState = saleReducer({ onRest: true }, {
      type: CONST_ACTION.SET_ON_REST,
      payload: {
        onRest: false
      }
    });
    expect(actualState.onRest).toBe(false);
  });

  /*  it('Установка текущего документа. CONST_ACTION.SET_DOC', ()=> {

      let actualState = saleReducer({ doc: { n: 1 } }, {
        type: CONST_ACTION.SET_DOC,
        payload: {
          doc: { n: 2 }
        }
      });
      expect(actualState.doc).toEqual({ n: 2, message: '' });
    });
  */
});
