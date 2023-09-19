import { CONST_ACTION, INITVAR } from '../../constants';
import * as actions from '../GroupTActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('GroupTActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('selectGroupT', () => {
    nock(INITVAR.URL_SERVER)
    .get('/groupt/1/')
    .reply(200, {
      n: 1,
      name: 'Группа1',
      featureTempls: [
      {
        n: 111,
        name: 'Хар-ка111'
      },
      {
        n: 222,
        name: 'Хар-ка222'
      }]
    });

    let expectedSelectedGroupT = {
      n: 1,
      name: 'Группа1',
      featureTempls: [
      {
        n: 111,
        name: 'Хар-ка111'
      },
      {
        n: 222,
        name: 'Хар-ка222'
      }
      ]
    };
    const expectedActions = [
    {
      type: CONST_ACTION.SELECT_GROUPT,
      payload: {
        selectedGroupT: expectedSelectedGroupT
      }
    },
    {
      type: 'EMPTY'
    }
    ];

    const store = mockStore({});

    let groupT = {
      n: 1,
      name: 'Группа1'
    };
    let fnAfterGetGroupT = function () {
      return { type: 'EMPTY' };
    };

    return store.dispatch(actions.selectGroupT(groupT, true, fnAfterGetGroupT))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getAllPricesByGroupT', () => {
    nock(INITVAR.URL_SERVER)
    .post('/price/getByFilter/')
    .reply(200, [
    {
      product: {
        n: 111,
        name: 'Товар111'
      },
      cena: 11
    },
    {
      product: {
        n: 222,
        name: 'Товар222'
      },
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
              product: {
                n: 111,
                name: 'Товар111'
              },
              cena: 11
            },
            {
              product: {
                n: 222,
                name: 'Товар222'
              },
              cena: 22
            }
            ] }
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});

    let groupT = {
      n: 1,
      name: 'Группа1'
    };
    return store.dispatch(actions.getAllPricesByGroupT(groupT, true))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
