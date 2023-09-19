import { CONST_ACTION, INITVAR } from '../../constants';
import * as actions from '../PriceActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PriceActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Отбор товаров по хар-м (getByFilter)', () => {
    nock(INITVAR.URL_SERVER)
    .post('/price/getByFilter/')
    .reply(200, [
      {
        product: { n: 111, name: 'Товар111' },
        cena: 11
      },
      {
        product: { n: 222, name: 'Товар222' },
        cena: 22
      }
    ]);

    const expectedActions = [
    {
      type: CONST_ACTION.PROGRESS_SHOW
    },
    {
      type: CONST_ACTION.GET_PRICES,
      payload: {
        prices: [
          {
            product: { n: 111, name: 'Товар111' },
            cena: 11
          },
          {
            product: { n: 222, name: 'Товар222' },
            cena: 22
          }
        ],
        searchString: '',
        queryFeature: []
      }
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});
    return store.dispatch(actions.getByFilter('Группа', [], true))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Сортировка товаров(resort)', () => {

    let order = 'По названию';
    const expectedActions = [
    {
      type: CONST_ACTION.RESORT_PRICES,
      payload: order
    }
    ];

    const store = mockStore({});

    store.dispatch(actions.resort(order));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Установка флага Только на остатках(setOnRest) searchString и queryFeature пустые', () => {
    let onRest = true;
    const expectedActions = [
    {
      type: CONST_ACTION.SET_ON_REST,
      payload: {
        onRest: onRest
      }
    }
    ];

    const store = mockStore({
      sale: {
        searchString: '',
        queryFeature: [],
        selectedGroupT: {
          n: 0,
          name: ''
        }
      }
    });

    let fnGetByFilter = function () {
      return jest.fn();
    };

    store.dispatch(actions.setOnRest(onRest, fnGetByFilter));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Отбор товаров по названию (getByName)', () => {
    let findName = 'Товар';
    let actualBody = {};
    let expectBody = {
      name: 'Товар',
      onrest: true
    };

    nock(INITVAR.URL_SERVER)
    .post('/price/getByFilter/', (body)=> {
      actualBody = body;
      return true;
    })
    .reply(200, [
    {
      product: { n: 111, name: 'Товар111' },
      cena: 11
    },
    {
      product: { n: 222, name: 'Товар222' },
      cena: 22
    }
    ]);

    const expectedActions = [
    {
      type: CONST_ACTION.PROGRESS_SHOW
    },
    {
      type: CONST_ACTION.GET_PRICES,
      payload: {
        prices: [
          {
            product: { n: 111, name: 'Товар111' },
            cena: 11
          },
          {
            product: { n: 222, name: 'Товар222' },
            cena: 22
          }
        ],
        searchString: findName,
        queryFeature: []
      }
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});
    let onRest = true;
    return store.dispatch(actions.getByName(findName, onRest))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(actualBody).toEqual(expectBody);
    });
  });
});
