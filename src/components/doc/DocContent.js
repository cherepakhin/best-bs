import React from 'react';
import PaymentPanel from './PaymentPanel';
import DiscountPanel from './DiscountPanel';
import DocHeader from './DocHeader.js';
import DocBody from './DocBody.js';

// TODO: Не реализовано действие кнопки Сохранить
/**
 * Отображение документа
 */
class DocContent extends React.Component{
  constructor(props) {
    super(props);
    this.handleCloseDoc = ::this.handleCloseDoc;
  }

  handleCloseDoc() {
    this.props.actions.doc.closeDoc();
  }

  render() {
    return (
      <div className='row col-md-10 col-md-offset-1'>
        <div className='panel panel-default'>
          <DocHeader doc={this.props.doc}/>
          <DocBody doc={this.props.doc} actions={this.props.actions.doc}/>
        </div>
        <div className='col-md-12' style={{ marginRight: 0, paddingRight: 0, paddingLeft: 0 }}>
          <PaymentPanel payments={this.props.doc.payments} actions={this.props.actions.payment}/>
          <DiscountPanel discounts={this.props.doc.discounts} actions={this.props.actions.discount}/>
        </div>
        <div className='col-md-11 col-md-offset-1' style={{ paddingRight: 0 }}>
          <button
            type='button'
            className='btn btn-primary pull-right'
            >Оформить ЗАКАЗ
          </button>
          <div>  </div>
          <button
            type='button'
            className='btn btn-default pull-right'
            style={{ marginRight: 5 }}
            onClick={this.handleCloseDoc}
            >Закрыть документ
          </button>
        </div>
      </div>
    );
  }

}

DocContent.propTypes = {
  actions: React.PropTypes.shape({
    doc: React.PropTypes.shape({
      deleteDocItem: React.PropTypes.func.isRequired,
      closeDoc: React.PropTypes.func.isRequired
    }).isRequired,
    payment: React.PropTypes.shape({
      del: React.PropTypes.func.isRequired
    }).isRequired,
    discount: React.PropTypes.shape({
      del: React.PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  doc: React.PropTypes.shape({
    n: React.PropTypes.number.isRequired,
    ddate: React.PropTypes.string.isRequired,
    bonus: React.PropTypes.number.isRequired,
    docItems: React.PropTypes.array.isRequired,
    payments: React.PropTypes.array.isRequired,
    discounts: React.PropTypes.array.isRequired
  }).isRequired
};

export default DocContent;
