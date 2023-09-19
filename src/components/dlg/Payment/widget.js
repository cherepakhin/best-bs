import React from 'react';
import AWidgetDlg from '../AWidgetDlg.js';
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

/*
 Диалог ввода суммы оплаты
 */

class DlgPayment extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.state = {
      summa: 0
    };
    this.handleOk = ::this.handleOk;
    this.linkRef = ::this.linkRef;
  }

  handleOk() {
    let payment = {
      typePayment: this.props.typePayment.name,
      summa: this.inputSumma.value
    };
    this.props.actions.fnOk(this.props.doc, payment);
  }

  linkRef(node) {
    if (node != null) {
      this.inputSumma = node;
      this.inputSumma.value = this.props.doc.summaOut;
      this.inputSumma.focus();
    }
  }

  render() {
    return (
      <div className='static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Оплатить</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId='formHorizontalSumma' style={{ marginBottom: 0 }}>
                <Col componentClass={ControlLabel} sm={2}>
                  {this.props.typePayment.name}
                </Col>
                <Col sm={10}>
                  <FormControl
                    type='number'
                    inputRef={this.linkRef}
                    onKeyDown={this.handleChange}
                    />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleCancel}>Отмена</Button>
            <Button id='btnOk' onClick={this.handleOk} bsStyle='primary'>Сохранить</Button>
          </Modal.Footer>

        </Modal.Dialog>
        </div>
        );
  }
}

DlgPayment.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired,
  typePayment: React.PropTypes.object.isRequired
};

DlgPayment.defaultProps = {
  modalType: '',
  doc: { n: 0 },
  typePayment: {
    n: 0,
    name: 'Наличные'
  }
};

export default DlgPayment;
