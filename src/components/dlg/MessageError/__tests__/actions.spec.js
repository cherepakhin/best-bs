import { CONST_ACTION } from '../../../../constants.js';
import ok from '../../cancel.js';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Обработка MessageError кнопки close', () => {
  it('Закрыть диалог', () => {
    const expectedActions = [
      { type: CONST_ACTION.CLOSE_DIALOG }
    ];

    const store = mockStore({});
    store.dispatch(ok());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
