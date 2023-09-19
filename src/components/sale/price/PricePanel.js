import React from 'react';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductCena from './ProductCena';

class PricePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='panel panel-default'
        key={this.props.index}
      >
        <div className='panel-body'
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0
          }}>
            <ProductImage product={this.props.price.product}/>
            <ProductName product={this.props.price.product}/>
            <ProductCena
              price={this.props.price}
              doc={this.props.doc}
              actions={this.props.actions}
            />
        </div>
      </div>
    );
  }
}

PricePanel.propTypes = {
  index: React.PropTypes.number.isRequired,
  price: React.PropTypes.object.isRequired,
  doc: React.PropTypes.object.isRequired,
  actions: React.PropTypes.shape({
    addDocItem: React.PropTypes.func.isRequired
  })
};

PricePanel.defaultProps = {
  index: 0,
  doc: {},
  price: {
    index: 0,
    product: {
      n: 0,
      name: ''
    },
    cena: 0
  }
};

export default PricePanel;
