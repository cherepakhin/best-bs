
import mapDlg from '../../../mapDlg.js';
import dlg from '../dlg.js';

import fnOk from '../actions.js';
import cancel from '../../../cancel.js';
import { CONST_ACTION } from '../../../../../constants.js';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

mapDlg.keys(); // Какой-то хитрый косяк. Если не определить mapDlg, то DiscountDlg не находится
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test DLG_PAY_BONUSCARD', () => {

    it('Определение widget', () => {

      // console.log(dlg);
      expect(dlg.widget).toBeDefined();
    });

    it('Определение ok', () => {
      expect(dlg._actions.fnOk).toBeDefined();
      expect(dlg._actions.fnOk).toEqual(fnOk);
    });

    it('Определение cancel', () => {
      expect(dlg._actions.fnCancel).toBeDefined();
      expect(dlg._actions.fnCancel).toEqual(cancel);
    });

    it('Определение typeDlg', () => {
      expect(dlg.typeDlg).toBeDefined();
      expect(dlg.typeDlg).toEqual(CONST_ACTION.DLG_PAY_BONUSCARD);
    });

    it('Определение title', () => {
      expect(dlg.title).toBeDefined();
      expect(dlg.title).toEqual('Оплата картой');
    });

    it('Тест show', () => {

      const store = mockStore({});
      const expectedActions = [
      {
        type: CONST_ACTION.OPEN_DIALOG,
        payload: {
          modalType: CONST_ACTION.DLG_PAY_BONUSCARD,
          modalProps: {
            message: 'message'
          }
        }
      }
      ];
      dlg.show(store.dispatch, { message: 'message' });
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
