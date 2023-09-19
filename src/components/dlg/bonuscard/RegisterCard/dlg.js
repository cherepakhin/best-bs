import widget from './widget.js';
import fnOk from './actions.js';
import { CONST_ACTION } from '../../../../constants.js';
import ADlg from '../../ADlg.js';

/**
 * Контроллер для регистрации бонусной карты
 */
class ORegisterCard extends ADlg {

  constructor() {
    super(CONST_ACTION.DLG_REGISTER_BONUSCARD, 'Регистрация карты', widget, fnOk);
  }
}

export default new ORegisterCard();
