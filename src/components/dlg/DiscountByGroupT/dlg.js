import widget from './widget.js';
import { CONST_ACTION } from '../../../constants.js';
import ADlg from '../ADlg.js';
import fnOk from './actions.js';

/**
 * Контроллер для управления диалогом ввода процента скидки
 */
class ODiscountByGroupT extends ADlg {

  constructor() {
    let title = 'Скидка по группе товаров';
    super(CONST_ACTION.DLG_DISCOUNT_BY_GROUPT, title, widget, fnOk);
  }
}

export  default new ODiscountByGroupT();
