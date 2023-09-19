import React from 'react';

/**
 * Заготовка для создания диалогов
 */
class AWidgetDlg extends React.Component {

  constructor(props) {
    // console.log('constructor AWidgetDlg');
    super(props);
    this.handleOk = ::this.handleOk;
    this.handleCancel = ::this.handleCancel;
    this.handleChange = ::this.handleChange;
  }

  handleCancel() {
    this.props.actions.fnCancel();
  }

  handleOk() {
    this.props.actions.fnOk();
  }

  /**
   * Реакция на ввод Enter  и Esc
   * @param  {[type]} e [description]
   */
  handleChange(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      this.handleCancel();
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();

      // !!!!! Вызов абстрактного метода.
      // handleOk() ДОЛЖЕН БЫТЬ ОПРЕДЕЛЕН В ПОТОМКАХ
      this.handleOk();
    }
  }
}

AWidgetDlg.propTypes = {
  actions: React.PropTypes.shape({
    fnOk: React.PropTypes.func.isRequired,
    fnCancel: React.PropTypes.func.isRequired
  }).isRequired
};

AWidgetDlg.defaultProps = {
  actions: {
    fnOk: function () {
    },

    fnCancel: function () {
    }
  }
};

export default AWidgetDlg;
