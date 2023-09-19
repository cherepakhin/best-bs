import { CONST_ACTION, INITVAR } from '../../../constants';
import * as actions from '../../DocActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('DocActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Удаление товара из выписки (delete_doc_item)', () => {
    let doc = {
      n: 100,
      ddate: '01.01.17',
      bonus: 10,
      summaIn: 100,
      summaOut: 100,
      docItems: [],
      payments: [],
      discounts: []
    };
    nock(INITVAR.URL_SERVER)
    .delete('/docitem/100/')
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

    let docItem = {
      n: 100
    };

    return store.dispatch(actions.deleteDocItem(docItem))
    .then(() => { // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
