import { CONST_ACTION, INITVAR } from '../../../constants';
import * as payActions from '../../PaymentActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PaymentActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Удаление платежа сохраненного в базе (payment.n != undefined)', () => {
    let payment = { n: 1, summa: 100 };
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
    .delete('/payment/1/')
    .reply(200, doc);

    const expectedActions = [
      { type: CONST_ACTION.DELETE_PAYMENT, payload: payment },
      { type: CONST_ACTION.SET_DOC, payload: doc }
    ];

    const store = mockStore({});

    return store.dispatch(payActions.del(payment))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
