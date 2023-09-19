import React from 'react';
import Menu from '../../util/Menu.js';
import mapDiscountDlg from '../mapDiscountDlg.js';

/**
 * Меню скидок
 */
class MenuDiscounts extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = [];
    mapDiscountDlg.forEach((value, key) => {
      menuItems.push({
        key: key,
        title: value,
        action: this.props.actions.openDlg.bind(null, key, {
          doc: this.props.doc
        })
      });
    });
    return <Menu menuItems={menuItems} name='Акции'/>;
  }
}

MenuDiscounts.propTypes = {
  actions: React.PropTypes.shape({
    openDlg: React.PropTypes.func.isRequired
  }).isRequired,
  doc: React.PropTypes.object.isRequired
};

export default MenuDiscounts;
