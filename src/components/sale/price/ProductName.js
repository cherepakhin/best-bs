import React from 'react';

class ProductName extends React.Component {
  constructor(props) {
    super(props);
  }

  getFeatures(product) {
    if (product.features != undefined) {
      return product.features.map((feature, index)=>(
            <div key={index}>
              <dt style={{ marginLeft: 0 }}>{feature.name}</dt>
              <dd>{feature.fval}</dd>
            </div>
          ));
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className='col-md-8' >
        <h4 className='text-info' style={{ marginBottom: 0 }}>
          <table style={{ width: '100%' }}>
            <tr>
              <td style={{ width: '100%' }}>
                <strong>{this.props.product.name}</strong>
              </td>
              <td className='text-right text-muted'>
                <small>{this.props.product.n}</small>
              </td>
            </tr>
          </table>
        </h4>
        <dl className='dl-horizontal' style={{ marginBottom: 0 }}>
          {this.getFeatures(this.props.product)}
        </dl>
      </div>
    );
  }
}

ProductName.propTypes = {
  product: React.PropTypes.shape({
    n: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    features: React.PropTypes.array.isRequired
  }).isRequired
};

ProductName.defaultProps = {
  product: {
    n: 0,
    name: '',
    features: []
  }
};

export default ProductName;
