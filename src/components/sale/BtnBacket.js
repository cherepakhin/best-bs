import React from 'react';
import { Link } from 'react-router';

class BtnBacket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <form className='navbar-form navbar-right'>
      <Link className='btn btn-default'
         type='submit'
         style={{ marginRight: 15 }}
         to='/doc'>
        <span className='glyphicon glyphicon-shopping-cart' aria-hidden='true'></span>
        <strong> КОРЗИНА {this.props.summa} р.</strong>
      </Link>
    </form>
    );
  }
}

BtnBacket.propTypes = {
  summa: React.PropTypes.number.isRequired
};

export default BtnBacket;
