import mapDlg from '../../mapDlg.js';
import dlg from '../dlg.js';
import fnOk from '../actions.js';
import { CONST_ACTION } from '../../../../constants.js';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

mapDlg.keys(); // Какой-то хитрый косяк. Если не определить mapDlg, то DiscountDlg не находится

describe('Test DLG_DISCOUNT_PERCENT_ON_PRODUCT', () => {

  it('Определение widget', () => {
    expect(dlg.widget).toBeDefined();
  });

  it('Определение ok', () => {
    expect(dlg._actions.fnOk).toBeDefined();
    expect(dlg._actions.fnOk).toEqual(fnOk);
  });

  it('Определение typeDlg', () => {
    expect(dlg.typeDlg).toBeDefined();
    expect(dlg.typeDlg).toEqual(CONST_ACTION.DLG_DISCOUNT_PERCENT_ON_PRODUCT);
  });

  it('Определение title', () => {
    expect(dlg.title).toBeDefined();
    expect(dlg.title).toEqual('Процентная скидка на товар');
  });

  it('Тест show', () => {

    const store = mockStore({});
    const expectedActions = [
    {
      type: CONST_ACTION.OPEN_DIALOG,
      payload: {
        modalType: CONST_ACTION.DLG_DISCOUNT_PERCENT_ON_PRODUCT,
        modalProps: {
          param: 'testparam'
        }
      }
    }
    ];
    dlg.show(store.dispatch, { param: 'testparam' });
    expect(store.getActions()).toEqual(expectedActions);
  });
});
