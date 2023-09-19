import widget from './widget.js';
import { CONST_ACTION } from '../../../constants.js';
import ADlg from '../ADlg.js';
import fnOk  from './actions.js';

/**
 * Контроллер для управления диалогом ввода процента скидки
 */
class ODiscountPercentOnProduct extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_DISCOUNT_PERCENT_ON_PRODUCT, 'Процентная скидка на товар', widget, fnOk);
  }
}

export default new ODiscountPercentOnProduct();
