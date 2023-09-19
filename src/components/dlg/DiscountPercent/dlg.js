import widget from './widget.js';
import fnOk from './actions.js';
import { CONST_ACTION } from '../../../constants.js';
import ADlg from '../ADlg.js';

/**
 * Контроллер для управления диалогом ввода процента скидки
 */
class ODiscountPercent extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_DISCOUNT_PERCENT, 'Процентная скидка на выписку', widget, fnOk);
  }
}

export default new ODiscountPercent();
