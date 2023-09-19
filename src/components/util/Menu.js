import React from 'react';
import MenuItem from './MenuItem.js';


/**
 * Меню
 * @param  {function} onClick - Фунция выбора
 * @param  {String} title - название
 * @param [Object] params - параметры для передачи в функцию выбоа
 */

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.getMenuItems = ::this.getMenuItems;
  }

  getMenuItems() {
    return this.props.menuItems.map((menuItem)=>
      <MenuItem
        key={menuItem.title}
        title={menuItem.title}
        onClick = {menuItem.action}
      />
    );
  }

  render() {
    return (
      <li className='dropdown'>
        <a className='dropdown-toggle'
          href='#'
          data-toggle='dropdown'
          role='button'
          aria-haspopup='true'
          aria-expanded='false'>
              {this.props.name}<span className='caret'></span>
        </a>
        <ul className='dropdown-menu'>
          {this.getMenuItems()}
        </ul>
      </li>
    );
  }
}

Menu.propTypes = {
  menuItems: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired
};

Menu.defaultProps = {
  menuItems: [],
  name: ''
};

export default Menu;
