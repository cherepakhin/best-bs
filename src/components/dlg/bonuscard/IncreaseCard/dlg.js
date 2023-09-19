import widget from './widget.js';
import fnOk from './actions.js';
import { CONST_ACTION } from '../../../../constants.js';
import ADlg from '../../ADlg.js';

/**
 * Контроллер для регистрации бонусной карты
 */
class OIncreaseCard extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_INCREASE_BONUSCARD, 'Пополнение карты', widget, fnOk);
  }
}

export default new OIncreaseCard();
