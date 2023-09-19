import React from 'react';
import Menu from '../../util/Menu.js';
import { CONST_ACTION } from '../../../constants.js';

//TODO: Не реализовано сохранение платежа
/*  onClick={this.props.actions.openDlg.bind(null, CONST_ACTION.DLG_PAYMENT, {
      typePayment: typePayment,
      doc: this.props.doc,
      fnCreate: this.props.actions.payment.create,
    })}
*/
class MenuTypePayments extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = [];
    this.props.typePayments.forEach((typePayment, index) => {
      menuItems.push({
        key: index,
        title: typePayment.name,
        action: this.props.actions.openDlg.bind(null, CONST_ACTION.DLG_PAYMENT, {
          doc: this.props.doc,
          typePayment: typePayment
        })
      });
    });
    return <Menu menuItems={menuItems} name='Оплатить'/>;
  }
}

MenuTypePayments.propTypes = {
  actions: React.PropTypes.shape({
    openDlg: React.PropTypes.func.isRequired
  }).isRequired,
  doc: React.PropTypes.object.isRequired,
  typePayments: React.PropTypes.array.isRequired
};

export default MenuTypePayments;
