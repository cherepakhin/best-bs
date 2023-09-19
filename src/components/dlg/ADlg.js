import cancel from './cancel.js';
import { CONST_ACTION } from '../../constants.js';
import { bindActionCreators } from 'redux';

export default class ADlg {

  constructor(typeDlg, title, widget, fnOk) {
    this.typeDlg = typeDlg;
    this.title = title ? title : '';
    this.widget = widget;
    /*    this.fnOk = fnOk ? fnOk : cancel,
        this.fnCancel = cancel;*/
    this._actions = {
      fnOk: fnOk ? fnOk : cancel,
      fnCancel: cancel
    };
  }

  show(dispatch, modalProps) {
    this.actions = bindActionCreators(this._actions, dispatch),
/*    this.actions = {
      fnOk: bindActionCreators(this.fnOk, dispatch),
      fnCancel: bindActionCreators(this.fnCancel, dispatch)
    };*/

    dispatch({
      type: CONST_ACTION.OPEN_DIALOG,
      payload: {
        modalType: this.typeDlg,
        modalProps: modalProps
      }
    });
  }
}
