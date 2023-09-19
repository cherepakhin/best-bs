import React from 'react';
import { Button, Modal, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import AWidgetDlg from '../../AWidgetDlg.js';

/*
 Диалог регистрации бонусной карты
 */

class DlgRegisterCard extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.handleOk = ::this.handleOk;
    this.linkRefName = ::this.linkRefName;
    this.linkRefPhone = ::this.linkRefPhone;
    this.linkRefStroke = ::this.linkRefStroke;
  }

  handleOk() {
    let contact = {
      name: this.inputName.value,
      phone: this.inputPhone.value
    };
    this.props.actions.fnOk(this.props.doc, contact, this.inputStroke.value);
  }

  linkRefStroke(node) {
    if (node != null) {
      this.inputStroke = node;
      this.inputStroke.value = '';
    }
  }

  linkRefPhone(node) {
    if (node != null) {
      this.inputPhone = node;
      this.inputPhone.value = '';
    }
  }

  linkRefName(node) {
    if (node != null) {
      this.inputName = node;
      this.inputName.value = '';
      this.inputName.focus();
    }
  }

  render() {
    return <div className='static-modal'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Регистрация бонусной карты</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId='formHorizontalName'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Покупатель
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                type='text'
                                inputRef={this.linkRefName}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='formHorizontalPhone'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Телефон
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                type='tel'
                                inputRef={this.linkRefPhone}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId='formHorizontalStroke'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Штрих карты
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                id='stroke'
                                type='number'
                                inputRef={this.linkRefStroke}
                                onKeyDown={this.handleChange}
                            />
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleCancel}>Отмена</Button>
                    <Button id='btnOk' onClick={this.handleOk} bsStyle='primary'>Выдать карту</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>;
  }
}

DlgRegisterCard.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired
};

DlgRegisterCard.defaultProps = {
  modalType: '',
  doc: { n: 0 }
};

export default DlgRegisterCard;
