import widget from './widget.js';
import * as actions from '../../../actions/PaymentActions.js';
import { CONST_ACTION } from '../../../constants.js';
import ADlg from '../ADlg.js';

/**
 * Контроллер для управления диалогом ввода оплаты
 */
class OPayment extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_PAYMENT, 'Оплата', widget, actions.create);
  }
}

export default new OPayment();
