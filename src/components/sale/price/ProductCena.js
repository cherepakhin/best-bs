import React from 'react';
import BthAddToDoc from './BthAddToDoc';
import { formatMoney } from '../../../constants.js';

class ProductCena extends React.Component {
  constructor(props) {
    super(props);
  }

  /*          <strong>{this.props.price.cena.formatMoney(0, '.', ' ')}*/

  /*          style={{
          marginBottom: -99999,
          paddingBottom: 99999,
          paddingLeft: 0,
          paddingRight: 0,
          background: '#F3F7FA'
        }}
  */
  render() {
    return (
      <div className='col-md-2 text-center'
        style={{
          background: '#F3F7FA',
          paddingRight: 0,
          paddingLeft: 0
        }}
      >
        <h2 style={{ marginBottom: 0 }}>
          <strong>{formatMoney(this.props.price.cena)}
            <small><span className='glyphicon glyphicon-rub' aria-hidden='true'></span></small>
          </strong>
        </h2>
        <BthAddToDoc
          price={this.props.price}
          actions={this.props.actions}
          doc={this.props.doc}
        />
      </div>
    );
  }
}

ProductCena.propTypes = {
  price: React.PropTypes.object.isRequired,
  doc: React.PropTypes.object,
  actions: React.PropTypes.shape({
    addDocItem: React.PropTypes.func.isRequired
  })
};

ProductCena.defaultProps = {
  price: {
    product: {
      n: 0,
      name: ''
    },
    cena: 0
  }
};

export default ProductCena;
