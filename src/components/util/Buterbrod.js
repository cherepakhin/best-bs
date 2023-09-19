import React from 'react';

class Buterbrod extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar-header'>
        <button className='navbar-toggle'
          type='button'
          data-toggle='collapse'
          data-target='#navbar-menu'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
      </div>
    );
  }
}

export default Buterbrod;
