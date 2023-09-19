import { CONST_ACTION, INITVAR } from '../../constants';
import initVar from '../InitVarActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('InitVar actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates InitVar when fetching initvar has been done', () => {
    nock(INITVAR.URL_SERVER)
    .get('/var/initvar/')
    .reply(200, {
      groups: [],
      typePayments: [],
      discounts: [],
      reports: [],
      company: {}
    });

    const expectedActions = [
    {
      type: CONST_ACTION.PROGRESS_SHOW
    },
    {
      type: CONST_ACTION.INIT_VAR,
      payload: {
        groups: [],
        typePayments: [],
        discounts: [],
        reports: [],
        company: {}
      }
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});

    return store.dispatch(initVar())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
