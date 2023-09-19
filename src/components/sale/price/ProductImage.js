import React from 'react';
import { Image } from 'react-bootstrap';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='col-md-2'
        style={{
          padding: 5
        }}>
        <Image src={'/public' + this.props.product.thumb} rounded responsive className='center-block'/>
      </div>
    );
  }
}

ProductImage.propTypes = {
  product: React.PropTypes.shape({
    n: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    thumb: React.PropTypes.string.isRequired
  }).isRequired
};

ProductImage.defaultProps = {
  product: {
    n: 0,
    name: '',
    thumb: ''
  }
};

export default ProductImage;
