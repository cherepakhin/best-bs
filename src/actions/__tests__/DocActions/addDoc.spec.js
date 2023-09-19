import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import * as actions from '../../DocActions';
import { CONST_ACTION, INITVAR } from '../../../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('DocActions', () => {
  it('Проверка событий', () => {
    let doc = {
      n: 100,
      ddate: new Date().toISOString().slice(0, 10),
      summaIn: 0,
      summaOut: 0
    };
    nock(INITVAR.URL_SERVER)
    .post('/doc/add_sale_docitem/')
    .reply(200, doc);

    const expectedActions = [
    {
      type: CONST_ACTION.PROGRESS_SHOW
    },
    {
      type: CONST_ACTION.SET_DOC,
      payload: doc
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});

    let price = {
      product: {
        n: 100
      },
      cena: 4
    };

    return store.dispatch(actions.addDocItem(doc, price))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Проверка параметров запроса', () => {
    let doc = {
      n: 100
    };

    let price = {
      product: {
        n: 101
      },
      cena: 4
    };

    let actualBody = {};

    nock(INITVAR.URL_SERVER)
    .post('/doc/add_sale_docitem/', (body)=> {
      actualBody = body;
      return true;
    })
    .reply(200, doc);

    const store = mockStore({});

    let expectBody = {
      doc: {
        n: 100,
        typeDoc: 'Продажа'
      },
      product: {
        n: 101
      },
      qty: 1,
      cena: 4
    };

    return store.dispatch(actions.addDocItem(doc, price))
    .then(() => {
      expect(actualBody).toEqual(expectBody);
    });

  });
});

