import reducer from '../modalReducer.js';
import { CONST_ACTION } from '../../constants';

let defaultState = {
    modalType: '',
    modalProps: {},
  };

describe('modalReducer', () => {
    it('default init', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it('Открыть диалог modalProps=scalar', () => {

        expect(reducer(defaultState, {
                type: CONST_ACTION.OPEN_DIALOG,
                payload: {
                  modalType: CONST_ACTION.DLG_MESSAGE,
                  modalProps: 'DLG_PROPS',
                }
              })
        ).toEqual({
          modalType: CONST_ACTION.DLG_MESSAGE,
          modalProps: 'DLG_PROPS',
        });
      });

    it('Открыть диалог modalProps=object', () => {

        expect(reducer(defaultState, {
                type: CONST_ACTION.OPEN_DIALOG,
                payload: {
                  modalType: CONST_ACTION.DLG_MESSAGE,
                  modalProps: {
                    message: 'message'
                  },
                }
              })
        ).toEqual({
          modalType: CONST_ACTION.DLG_MESSAGE,
          modalProps: {
            message: 'message'
          },
        });
      });
  });
