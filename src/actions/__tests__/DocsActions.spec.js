import { CONST_ACTION, INITVAR } from '../../constants';
import * as actions from '../DocsActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import * as router from 'react-router';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('DocsActions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('getByDate', () => {
    let today = new Date().toISOString().slice(0, 10);
    nock(INITVAR.URL_SERVER)
    .post('/doc/get_by_filter/')
    .reply(200, [
    {
      n: 11,
      ddate: today,
      summaIn: 0,
      summaOut: 0
    }, {
      n: 12,
      ddate: today,
      summaIn: 0,
      summaOut: 0
    }
    ]);

    const expectedActions = [
    {
      type: CONST_ACTION.PROGRESS_SHOW
    },
    {
      type: CONST_ACTION.SELECT_DATE_DOC,
      payload: {
        docs: [
        {
            n: 11,
            ddate: today,
            summaIn: 0,
            summaOut: 0
          }, {
            n: 12,
            ddate: today,
            summaIn: 0,
            summaOut: 0
          }
        ],
        ddate: today
      }
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});

    return store.dispatch(actions.getByDate(today))
    .then(() => { // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getDocByN', () => {
    router.browserHistory = [];
    let today = new Date().toISOString().slice(0, 10);
    /* Способы проверки
    1. .post('/doc/getDoc','docN=' + encodeURIComponent(1))

    2.
    let actualBody={};
    let expectBody={
    docN: '1'
    };
    .post('/doc/getDoc',(body)=>{
    let actualBody=body;
    return true;
    })
    ...
    expect(actualBody).toEqual(expectBody);

    3.  .post('/doc/getDoc',{docN: '1'})

    */

    nock(INITVAR.URL_SERVER)
    .get('/doc/1/')
    .reply(200, {
      n: 1,
      ddate: today,
      summaIn: 0,
      summaOut: 0
    }
    );

    const expectedActions = [
    {
      type: CONST_ACTION.PROGRESS_SHOW
    },
    {
      type: CONST_ACTION.SET_DOC,
      payload: {
        n: 1,
        ddate: today,
        summaIn: 0,
        summaOut: 0
      }
    },
    {
      type: CONST_ACTION.PROGRESS_HIDE
    }
    ];

    const store = mockStore({});

    return store.dispatch(actions.getDocByN(1))
    .then(() => { // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      expect(router.browserHistory).toEqual(['/doc']);
    });
  });
});
