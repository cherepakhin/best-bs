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

  it('Получение платежей на дату', () => {
    let ddate = new Date().toISOString().slice(0, 10);
    let summa = 0;
    let payments = [
      { n: 1, ddate, summa },
      { n: 2, ddate, summa }
    ];

    nock(INITVAR.URL_SERVER)
    .post('/payment/getByDate/')
    .reply(200, payments);

    const expectedActions = [
      { type: CONST_ACTION.PROGRESS_SHOW },
      { type: CONST_ACTION.SELECT_DATE_PAYMENT,
        payload: {
          payments: payments,
          ddate
        }
      },
      { type: CONST_ACTION.PROGRESS_HIDE }
    ];

    const store = mockStore({});

    return store.dispatch(payActions.getByDate(ddate))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
