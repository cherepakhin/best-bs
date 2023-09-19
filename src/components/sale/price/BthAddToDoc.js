import React from 'react';
import { Link } from 'react-router';

class BtnAddToDoc  extends React.Component {

  constructor(props) {
    // console.log(props);
    super(props);
    this.handlerAddToDoc = ::this.handlerAddToDoc;
    this.handlerAlreadyBought = ::this.handlerAlreadyBought;
  }

  // Положить товар в корзину
  handlerAddToDoc() {
    this.props.actions.addDocItem(this.props.doc, this.props.price);
  }

  // Уже куплено
  handlerAlreadyBought() {
  }

  isInDoc() {
    if (this.props.doc != undefined) {
      for (let i = 0; i < this.props.doc.docItems.length; i++) {
        let docItem = this.props.doc.docItems[i];
        if (docItem.product.n === this.props.price.product.n) {
          return true;
        }
      }
    }

    return false;
  }

  render () {
    return (
      <div>
        <button className={this.isInDoc() ? 'btn btn-primary' : 'btn btn-default'}
          id='btnAddToDoc'
          type='submit'
          onClick={!this.isInDoc() ? this.handlerAddToDoc : this.handlerAlreadyBought}
          style={{ marginBottom: 5 }}>
          <span
            className='glyphicon glyphicon-shopping-cart'
            aria-hidden='true'>
          </span>
          <strong>
          {this.isInDoc() ? ' КУПЛЕНО' : ' В КОРЗИНУ'}
          </strong>
        </button>
        {this.isInDoc() ? <div><Link id='linkDoc' to='/doc'>Перейти в корзину</Link></div> : ''}
    </div>
    );
  }
}

BtnAddToDoc.propTypes = {
  actions: React.PropTypes.shape({
    addDocItem: React.PropTypes.func.isRequired
  }),
  doc: React.PropTypes.object.isRequired,
  price: React.PropTypes.shape({
    product: React.PropTypes.shape({
      n: React.PropTypes.number.isRequired
    })
  })
};

export default BtnAddToDoc;
