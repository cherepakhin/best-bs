import widget from './widget.js';
import * as actions from './actions.js';
import { CONST_ACTION } from '../../../constants.js';
import ADlg from '../ADlg.js';

/**
 * Контроллер для управления диалогом ввода скидки на сумму
 */
class ODiscountSumma extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_DISCOUNT_SUMMA, 'Скидка на сумму', widget, actions.ok);
  }
}

export default new ODiscountSumma();
