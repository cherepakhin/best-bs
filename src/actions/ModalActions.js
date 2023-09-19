import mapDlg from '../components/dlg/mapDlg.js';
import { CONST_ACTION } from '../constants.js';

const openDlg = function (modalType, modalProps) {
  return (dispatch) => {
    if (modalType == undefined) {
      mapDlg.get(CONST_ACTION.DLG_MESSAGE).show(dispatch, 'Не указан тип диалога');
      return;
    }

    // Необходимо связать функции кнопок OK и CANCEL с dispatch
    // dispatch нужен в этих функциях для обмена с внешним миром

    // НЕ НРАВИТСЯ. может все таки пренести ok и cancel в спец.класс
    // содержащий и widget и функции ok и cancel
    // dispatch передавать через сеттер

    // Вроде так. Ok и cancel до сих пор не в классе dlg
    let dlg = mapDlg.get(modalType);
    if (dlg == undefined) {
      mapDlg.get(CONST_ACTION.DLG_MESSAGE)
      .show(dispatch, `Диалог с типом ${modalType} не определен`);
      return;
    }

    dlg.show(dispatch, modalProps);
  };
};

export default openDlg;
