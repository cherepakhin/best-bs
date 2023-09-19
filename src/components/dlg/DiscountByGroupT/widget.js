import React from 'react';
import AWidgetDlg from '../AWidgetDlg.js';
import { Button, Modal } from 'react-bootstrap';

/*
 Диалог скидки по группе товаров
 */
class DlgDiscountByGroupT extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.handleOk = ::this.handleOk;
  }

  handleOk() {
    this.fnOk(this.props.doc, this.props.modalType);
  }

  render() {
    return (
      <div className='static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Скидка по группе товаров</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Сделать скидку?
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleCancel}>Отмена</Button>
            <Button onClick={this.handleOk} bsStyle='primary'>Да</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );
  }
}

DlgDiscountByGroupT.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired
};

DlgDiscountByGroupT.defaultProps = {
  modalType: '',
  doc: { n: 0 }
};

export default DlgDiscountByGroupT;

