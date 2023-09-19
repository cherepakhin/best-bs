import openDlg from '../ModalActions.js';
import mapDlg from '../../components/dlg/mapDlg.js';
import { CONST_ACTION } from '../../constants.js';

describe('Тест ModalActions', () => {
  it('openDlg: typeModal определен', () => {
    let actualTypeDlg = '';
    let show = jest.fn();
    mapDlg.get = function (typeDlg) {
      actualTypeDlg = typeDlg;
      return {
        show
      };
    };

    // mapDlg.get().show = jest.fn();
    const MODAL_TYPE = 'MODAL_TYPE';
    const PARAM = 'param';
    let fn = openDlg(MODAL_TYPE, PARAM);
    let _dispatch = '_dispatch';
    fn(_dispatch);
    expect(actualTypeDlg).toBe(MODAL_TYPE);
    expect(show.mock.calls.length).toBe(1);
    expect(show.mock.calls[0]).toEqual([_dispatch, PARAM]);
  });

  it('openDlg: typeModal НЕ определен', () => {
    let actualTypeDlg = '';
    let show = jest.fn();
    mapDlg.get = function (typeDlg) {
      actualTypeDlg = typeDlg;
      return {
        show
      };
    };

    // mapDlg.get().show = jest.fn();
    const MODAL_TYPE = undefined;
    const PARAM = 'param';
    let fn = openDlg(MODAL_TYPE, PARAM);
    let _dispatch = '_dispatch';
    fn(_dispatch);
    expect(actualTypeDlg).toBe(CONST_ACTION.DLG_MESSAGE);
    expect(show.mock.calls.length).toBe(1);
    expect(show.mock.calls[0]).toEqual([_dispatch, 'Не указан тип диалога']);
  });

  it('openDlg: typeModal определен, но нет в mspDlg', () => {
    let fnShow = jest.fn();
    mapDlg.get = jest.fn();
    mapDlg.get
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce({ show: fnShow });

    // mapDlg.get().show = jest.fn();
    const MODAL_TYPE = 'MODAL_TYPE';
    const PARAM = 'param';
    let fn = openDlg(MODAL_TYPE, PARAM);
    let _dispatch = '_dispatch';
    fn(_dispatch);
    expect(fnShow.mock.calls.length).toBe(1);
    expect(mapDlg.get.mock.calls.length).toBe(2);
    expect(mapDlg.get.mock.calls[0]).toEqual([MODAL_TYPE]);
    expect(mapDlg.get.mock.calls[1]).toEqual([CONST_ACTION.DLG_MESSAGE]);
    expect(fnShow.mock.calls[0]).toEqual([_dispatch, `Диалог с типом ${MODAL_TYPE} не определен`]);
  });
});
