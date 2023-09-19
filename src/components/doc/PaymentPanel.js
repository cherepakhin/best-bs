import React from 'react';
import BtnDel from './BtnDel';

/**
 * Панель платежей
 * @type {any}
 */
class PaymentPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      summa: 0
    };
  }

  componentDidMount() {
    let summa = this.calcSum(this.props.payments);
    this.setState({ ...this.state, summa: summa });
  }

  calcSum(payments) {
    let summa = 0;
    if (payments !== undefined) {
      summa = payments.reduce((sum, payment)=>sum * 1 + payment.summa * 1, 0);
    }

    return summa;
  }

  componentWillReceiveProps(nextProps) {
    let summa = this.calcSum(nextProps.payments);
    this.setState({ ...this.state, summa: summa });
  }

  getRowsPayment() {
    let style = { border: 0 };
    let rowsPayment = this.props.payments.map((payment, index) => {
        return (
          <tr key={index}>
            <td className='col-md-3' style={style}>{payment.typePayment.name}</td>
            <td className='col-md-1 text-right' style={style}>{payment.summa}</td>
            <BtnDel action={this.props.actions.del} obj={payment}/>
          </tr>);
      });
    return rowsPayment;
  }

  render () {
    return (
      <div className='panel panel-default col-md-5' style={{ paddingRight: 0, paddingLeft: 0 }}>
        <div className='panel-heading'>Платежи</div>
        <div className='panel-body' style={{ paddingTop: 0, paddingBottom: 0 }}>
          <table className='table table-condensed ' style={{ marginBottom: 0 }}>
            <tbody>
              {this.getRowsPayment()}
              <tr>
                <td className='col-md-3 text-right'><strong>Итого:</strong></td>
                <td className='col-md-1 text-right'><strong>{this.state.summa}</strong></td>
                <td style={{ width: '1%' }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>);
  }
}

PaymentPanel.propTypes = {
  actions: React.PropTypes.shape({
    del: React.PropTypes.func.isRequired
  }),
  payments: React.PropTypes.array.isRequired
};

export default PaymentPanel;

