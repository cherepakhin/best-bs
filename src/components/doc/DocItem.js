import React from 'react';
import BtnDel from './BtnDel';

class DocItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlerDeleteDocItem = ::this.handlerDeleteDocItem;
  }

  handlerDeleteDocItem () {
    this.props.actions.deleteDocItem(this.props.docItem);
  }

  render() {
    return (
      <tr>
        <td className='col-md-1 text-right'>
          {this.props.docItem.product.n}
        </td>
        <td className='col-md-5'>
          {this.props.docItem.product.name}
        </td>
        <td className='col-md-1 text-right'>
          {this.props.docItem.price}
        </td>
        <td className='col-md-1 text-right'>
          {this.props.docItem.qty}
        </td>
        <td className='col-md-1 text-right'>
          {(this.props.docItem.cenaOut - this.props.docItem.price) * this.props.docItem.qty}
        </td>
        <td className='col-md-1 text-right'>
          {this.props.docItem.cenaOut * this.props.docItem.qty}
        </td>
        <BtnDel obj={this.props.docItem} action={this.props.actions.deleteDocItem}/>
    </tr>
    );
  }
}

DocItem.propTypes = {
  actions: React.PropTypes.shape({
    deleteDocItem: React.PropTypes.func.isRequired
  }),
  docItem: React.PropTypes.shape({
    n: React.PropTypes.number.isRequired,
    product: React.PropTypes.shape({
      n: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired
    }),
    price: React.PropTypes.number.isRequired,
    cenaOut: React.PropTypes.number.isRequired,
    qty: React.PropTypes.number.isRequired
  })
};

export default DocItem;

