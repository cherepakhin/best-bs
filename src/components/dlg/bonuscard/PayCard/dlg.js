import widget from './widget.js';
import fnOk from './actions.js';
import { CONST_ACTION } from '../../../../constants.js';
import ADlg from '../../ADlg.js';

/**
 * Контроллер для оплаты бонусной картой
 */
class OPayCard extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_PAY_BONUSCARD, 'Оплата картой', widget, fnOk);
  }
}

export default new OPayCard();
