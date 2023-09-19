import React from 'react';
import AWidgetDlg from '../AWidgetDlg.js';
import { Button, Modal, Form, FormGroup, FormControl, Col } from 'react-bootstrap';

/*
 Диалог подтверждения скидки по группе товаров
 */
class DlgDiscountPercentOnProduct extends AWidgetDlg {

  constructor(props) {
    super(props);
    this.handleOk = ::this.handleOk;
    this.getDocItems = ::this.getDocItems;
    this.selectedDocItemN = { n: 0 };
  }

  handleOk() {
    this.props.actions.fnOk(
      this.props.doc,
      this.props.modalType,
      this.selectedDocItemN.value,
      this.inputPercent.value
    );
  }

  getDocItems() {
    let docItems = this.props.doc.docItems.map(function (item, index) {
        return <option value={item.product.n} key={index}>
                {item.product.name + '  :  ' + item.price}
            </option>;
      });

    return docItems;
  }

  render() {
    return (
      <div className='static-modal'>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Процентная скидка на товар</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form horizontal>
                <FormGroup>
                  <Col sm={12}>
                    <FormControl
                    componentClass='select'
                    inputRef={node => this.selectedDocItemN = node}
                  >
                        {this.getDocItems()}
                    </FormControl>
                    <br/>
                    <FormControl
                      type='number'
                      inputRef={ref => { this.inputPercent = ref; }}

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

DlgDiscountPercentOnProduct.propTypes = {
  modalType: React.PropTypes.string.isRequired,
  doc: React.PropTypes.object.isRequired
};

DlgDiscountPercentOnProduct.defaultProps = {
  modalType: '',
  doc: { n: 0 }
};

export default DlgDiscountPercentOnProduct;

