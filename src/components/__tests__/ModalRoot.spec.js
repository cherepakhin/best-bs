import { ModalRoot } from '../ModalRoot.js';
/*import { CONST_ACTION } from '../../constants.js';
import DlgMessageError from '../dlg/MessageError/widget.js';*/

describe('ModalRoot', () => {
  it('Инициализация с пустыми параметрами', () => {
    let dlg = ModalRoot({});
    expect(dlg).toBe(null);
    /*    expect(dlg.props.modalType).toEqual(CONST_ACTION.DLG_MESSAGE);
        expect(dlg.props.message).toEqual('Ошибка. Диалог не установлен.');
        expect(dlg.type).toEqual(DlgMessageError);*/
  });
});
