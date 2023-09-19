import widget from './widget.js';
import { CONST_ACTION } from '../../../constants.js';
import ADlg from '../ADlg.js';
import cancel from '../cancel.js';

/**
 * Контроллер для управления диалогом ввода процента скидки
 */
class OMessage extends ADlg {

  constructor() {
    let title = '';
    super(CONST_ACTION.DLG_MESSAGE, title, widget, cancel);
  }

  /*  show(dispatch, message) {
      this.dispatch = dispatch;
      this.dispatch({
        type: CONST_ACTION.OPEN_DIALOG,
        payload: {
          modalType: this.typeDlg,
          modalProps: {
            message: message
          }
        }
      });
    }
  */}

export  default new OMessage();
