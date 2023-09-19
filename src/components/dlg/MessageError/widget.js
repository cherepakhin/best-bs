import React from 'react';
import AWidgetDlg from '../AWidgetDlg.js';
import { Button, Modal } from 'react-bootstrap';

/*
 Сообщение об ошибке
 */
class DlgMessageError extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.handleOk = ::this.handleOk;
  }

  componentDidMount() {
    // this.btnOk.focus();
  }

  handleOk() {
    console.log(this);
    this.props.actions.fnOk();
  }

  render() {
    return (
      <div className='static-modal'>
          <Modal.Dialog>
            <Modal.Header className='bg-info'>
              <Modal.Title>Ошибка</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.props.message}
            </Modal.Body>

            <Modal.Footer>
              <Button
              onClick={this.handleOk}
              onKeyDown={this.handleChange}
              inputRef={node => this.btnOk = node}
              >
                Закрыть
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );}
}

DlgMessageError.propTypes = {
  message: React.PropTypes.string.isRequired
};

DlgMessageError.defaultProps = {
  message: ''
};

export default DlgMessageError;

