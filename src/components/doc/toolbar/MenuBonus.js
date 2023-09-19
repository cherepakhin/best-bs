import React from 'react';
import { CONST_ACTION } from '../../../constants.js';
import Menu from '../../util/Menu.js';

/**
 * Меню бонусов
 */
class MenuBonus extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = [];
    menuItems.push({
      key: 0,
      title: 'Выдать карту',
      action: this.props.actions.openDlg.bind(null, CONST_ACTION.DLG_REGISTER_BONUSCARD, {
        doc: this.props.doc
      })
    });
    menuItems.push({
      key: 1,
      title: 'Пополнить карту',
      action: this.props.actions.openDlg.bind(null, CONST_ACTION.DLG_INCREASE_BONUSCARD, {
        doc: this.props.doc
      })
    });
    menuItems.push({
      key: 2,
      title: 'Оплатить картой',
      action: this.props.actions.openDlg.bind(null, CONST_ACTION.DLG_PAY_BONUSCARD, {
        doc: this.props.doc
      })
    });
    return <Menu menuItems={menuItems} name='Бонусы'/>;
  }
}

MenuBonus.propTypes = {
  actions: React.PropTypes.shape({
    openDlg: React.PropTypes.func.isRequired
  }).isRequired,
  doc: React.PropTypes.object.isRequired
};

export default MenuBonus;
