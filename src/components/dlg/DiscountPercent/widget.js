import React from 'react';
import AWidgetDlg from '../AWidgetDlg.js';
import { Button, Modal, Form, FormGroup, FormControl, Col } from 'react-bootstrap';

/**
 * Диалог ввода процента скидки
 * @class DlgDiscountPercent
 * @extends React.Component
 */
class DlgDiscountPercent extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.state = {
      percent: 5 // Процент(number) по умолчаию
    };
    this.handleOk = ::this.handleOk;
    this.linkRef = ::this.linkRef;
  }

  handleOk() {
    this.props.actions.fnOk(this.props.doc, this.props.modalType, this.inputPercent.value);
  }

  linkRef(node) {
    if (node != null) {
      this.inputPercent = node;
      this.inputPercent.value = this.state.percent;
      this.inputPercent.focus();
    }
  }

  render() {
    return (
      <div className='static-modal'>
        <Modal.Dialog>

          <Modal.Header>
            <Modal.Title>Введите прооцент скидки</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal>
              <FormGroup style={{ marginBottom: 0 }}>
                <Col sm={12}>
                  <FormControl
                    id='percent'
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
            <Button onClick={this.handleOk} bsStyle='primary'>Сохранить</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );
  }
}

DlgDiscountPercent.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired,
  actions: React.PropTypes.shape({
    fnOk: React.PropTypes.func.isRequired,
    fnCancel: React.PropTypes.func.isRequired
  }).isRequired
};

DlgDiscountPercent.defaultProps = {
  modalType: '',
  doc: { n: 0 },
  actions: {
    fnOk: function () {
    },

    fnCancel: function () {
    }
  }
};

export default DlgDiscountPercent;
