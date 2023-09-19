import React from 'react';
import { formatDate, formatMoney } from '../../constants';

class PaymentsContent extends React.Component{

  constructor(props) {
    super(props);
    this.summa = 0;
  }

  getRows() {
    this.summa = 0;
    let items = this.props.payments.map((payment, index)=> {
      this.summa = this.summa + payment.summa;
      return (
        <tr key={index}>
          <td className='col-md-1 text-right' >{payment.n}</td>
          <td className='col-md-1'>{formatDate(payment.ddate)}</td>
          <td className='col-md-1 text-right' >{payment.doc}</td>
          <td className='col-md-2'>{payment.typeMovementPayment.name}</td>
          <td className='col-md-1'>{payment.typePayment.name}</td>
          <td className='col-md-2'>{payment.contact.name}</td>
          <td className='col-md-1 text-right'>{formatMoney(payment.summa)}</td>
          <td className='col-md-3 text-right'></td>
        </tr>);
    });

    return items;
  }

  render() {
    return (
      <div className='row col-md-10 col-md-offset-1'>
        <div className='panel panel-default'>
          <div className='panel-body' style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className='row' style={{ overflow: 'hidden' }}>
              <table className='table table-condensed table-hover'
                style={{ marginBottom: 0 }}>
                <thead>
                  <tr>
                    <th className='col-md-1 text-right'>Номер</th>
                    <th className='col-md-1'>Дата</th>
                    <th className='col-md-1'>Док-т</th>
                    <th className='col-md-2'>Статья</th>
                    <th className='col-md-1'>Чем оплачено</th>
                    <th className='col-md-2'>Контрагент</th>
                    <th className='col-md-1 text-right'>Сумма</th>
                    <th className='col-md-3 text-right'></th>
                  </tr>
                </thead>
                <tbody>
                  {this.getRows()}
                  <tr>
                    <td className='col-md-1'></td>
                    <td className='col-md-1'></td>
                    <td className='col-md-1'></td>
                    <td className='col-md-2'></td>
                    <td className='col-md-1'></td>
                    <td className='col-md-2 text-right'>Итого:</td>
                    <td className='col-md-1 text-right'>{formatMoney(this.summa)}</td>
                    <td className='col-md-3 text-right'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PaymentsContent.propTypes = {
  payments: React.PropTypes.array.isRequired
};

export default PaymentsContent;
