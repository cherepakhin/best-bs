import React from 'react';
import { connect } from 'react-redux';

import mapDlg from './dlg/mapDlg.js';

/**
 * Компонета для отображения выбранного диалога
 * @param modalType
 * @param modalProps
 * @returns {*}
 * @constructor
 */
export const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
      return null;
    }

    let oDlg = mapDlg.get(modalType);
    let DLG = oDlg.widget;

    // Передаю actions из класса Dlg в widget DLG.
    // Раньше не могу, т.к. widget еще не создан.
    // В след. строке widget будет создан и туда через props переданы действия.
    return <DLG {...modalProps} modalType={modalType} actions={oDlg.actions}/>;
  };

ModalRoot.propTypes = {
  modalType: React.PropTypes.string,
  modalProps: React.PropTypes.object.isRequired
};

const mapStateToProps = function (state) {
  return state.modal;
};

export default connect(mapStateToProps)(ModalRoot);

