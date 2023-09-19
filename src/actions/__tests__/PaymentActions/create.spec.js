import { CONST_ACTION, INITVAR } from '../../../constants';
import * as payActions from '../../PaymentActions.js';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PaymentActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Создание и сохранение платежа в базе (payment.n != undefined)', () => {
    let payment = {
      n: 1,
      summa: 100
    };
    let doc = {
      n: 1,
      ddate: new Date().toISOString().slice(0, 10),
      typeDoc: {
        name: 'Выписка'
      },
      summaIn: 0,
      summaOut: 0,
      payments: []
    };
    nock(INITVAR.URL_SERVER)
    .post('/payment/paysale/')
    .reply(200, doc);

    const expectedActions = [
    {
      type: CONST_ACTION.CLOSE_DIALOG
    },
    {
      type: CONST_ACTION.SET_DOC,
      payload: doc
    }
    ];

    const store = mockStore({});

    return store.dispatch(payActions.create(doc, payment))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Проверка body post запроса', () => {
    let testdoc = {
      n: 1,
      ddate: '01.01.2001'
    };
    let payment = {
      typePayment: 'Наличные',
      summa: 100
    };

    let actualBody = {};

    let expectBody = {
      docN: 1,
      typePayment: 'Наличные',
      summa: 100
    };
    nock(INITVAR.URL_SERVER)
      .post('/payment/paysale/', (body)=> {
        actualBody = body;
        return true;
      })
      .reply(200, testdoc);

    const store = mockStore({});

    return store.dispatch(payActions.create(testdoc, payment))
      .then(() => {
        expect(expectBody).toEqual(actualBody);
      });
  });
});
