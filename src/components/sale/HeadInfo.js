import React from 'react';
import { Link } from 'react-router';
import BtnBacket from './BtnBacket.js';

class HeadInfo extends  React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <nav className='navbar navbar-default' role='navigation' style={{ marginBottom: 3 }}>
        <div className='navbar-default'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Товары</Link></li>
            <li><Link to='/docs'>Продажи</Link></li>
            <li><Link to='/payments'>Платежи</Link></li>
          </ul>

          <BtnBacket summa={this.props.doc.summaOut}/>
        </div>
    </nav>);
  }
}

HeadInfo.propTypes = {
  doc: React.PropTypes.shape({
    summaOut: React.PropTypes.number.isRequired
  })
};

export default HeadInfo;

