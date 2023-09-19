import { CONST_ACTION, INITVAR } from '../../../../../constants.js';
import fnOk from '../actions.js';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Обработка DlgIncreaseCard Ok', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Проверка последовательности вызовов dispatch при обработке ok', () => {
    let testdoc = {
      n: 1,
      ddate: '01.01.2001'
    };
    nock(INITVAR.URL_SERVER)
      .post('/bonuscard.ctrl/increase')
      .reply(200, testdoc);

    const expectedActions = [
      { type: CONST_ACTION.PROGRESS_SHOW },
      { type: CONST_ACTION.CLOSE_DIALOG },
      {
        type: CONST_ACTION.SET_DOC,
        payload: { doc: testdoc }
      },
      { type: CONST_ACTION.PROGRESS_HIDE }
    ];

    const store = mockStore({});

    return store.dispatch(fnOk(testdoc, 'STROKE'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('Проверка body post запроса при обработке ok', () => {
    let testdoc = {
      n: 1,
      ddate: '01.01.2001'
    };
    let actualBody = {};

    let expectBody = {
      docN: '1',
      stroke: 'STROKE'
    };
    nock(INITVAR.URL_SERVER)
      .post('/bonuscard.ctrl/increase', (body)=> {
        actualBody = body;
        return true;
      })
      .reply(200, testdoc);

    const store = mockStore({});

    return store.dispatch(fnOk(testdoc, 'STROKE'))
      .then(() => { // return of async actions
        expect(expectBody).toEqual(actualBody);
      });
  });
});
