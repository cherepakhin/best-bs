import React from 'react';
import AWidgetDlg from '../AWidgetDlg.js';
import { Button, Modal, Form, FormGroup, FormControl, Col } from 'react-bootstrap';

/*
 Диалог ввода суммы скидки
 */

class DlgDiscountSumma extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.state = {
      summa: 0
    };
    this.handleOk = ::this.handleOk;
    this.linkRef = ::this.linkRef;
  }

  handleOk() {
    this.props.actions.fnOk(this.props.doc, this.props.modalType, this.inputSumma.value);
  }

  linkRef(node) {
    if (node != null) {
      this.inputSumma = node;
      this.inputSumma.value = this.state.summa;
      this.inputSumma.focus();
    }
  }

  render() {
    return <div className='static-modal'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form horizontal>
                        <FormGroup style={{ marginBottom: 0 }}>
                            <Col sm={12}>
                                <FormControl
                                id='summa'
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
                    <Button onClick={this.handleOk} bsStyle='primary'>Сделать</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>;
  }
}

DlgDiscountSumma.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired
};

DlgDiscountSumma.defaultProps = {
  modalType: '',
  doc: { n: 0 }
};

export default DlgDiscountSumma;
