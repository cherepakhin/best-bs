import React from 'react';
import { Button, Modal, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import AWidgetDlg from '../../AWidgetDlg.js';

/*
 Диалог регистрации бонусной карты
 */

class DlgPayCard extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.handleOk = ::this.handleOk;
    this.linkRefStroke = ::this.linkRefStroke;
  }

  handleOk() {
    this.props.actions.fnOk(this.props.doc, this.inputStroke.value);
  }

  linkRefStroke(node) {
    if (node != null) {
      this.inputStroke = node;
      this.inputStroke.value = '';
      this.inputStroke.focus();
    }
  }

  render() {
    return (
      <div className='static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Оплата бонусной картой</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal>
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
            <Button id='btnOk' onClick={this.handleOk} bsStyle='primary'>Оплатить</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
      );
  }
}

DlgPayCard.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired
};

DlgPayCard.defaultProps = {
  modalType: '',
  doc: { n: 0 }
};

export default DlgPayCard;
