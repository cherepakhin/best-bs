import React from 'react';
import PropTypes from 'prop-types';
import BtnDel from './BtnDel';

/**
 * Панель скидок
 * @type {any}
 */
class DiscountPanel extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      summa: 0
    };
  }

  componentDidMount () {
    let summa = this.calcSum(this.props.discounts);
    this.setState({ ...this.state, summa: summa });
  }

  calcSum(discounts) {
    let summa = discounts.reduce((sum, discount) => sum + discount.summa, 0);
    return summa;
  }

  componentWillReceiveProps(nextProps) {
    let summa = this.calcSum(nextProps.discounts);
    this.setState({ ...this.state, summa: summa });
  }

  getRows() {
    let style = { border: 0 };
    let rowsDiscount = this.props.discounts.map((discount, index) => {
      return (
        <tr key={index} style={style}>
        <td className='col-md-3' style={style}>{discount.name}</td>
        <td className='col-md-1 text-right' style={style}>{discount.summa}</td>
        <BtnDel action={this.props.actions.del} obj={discount}/>
      </tr>);
    });
    return rowsDiscount;
  }

  render() {
    let style = { border: 0 };
    return (
      <div className='panel panel-default col-md-5 col-md-offset-2' style={{ paddingRight: 0, paddingLeft: 0 }}>
        <div className='panel-heading'>Скидки</div>
        <div className='panel-body' style={{ paddingTop: 0, paddingBottom: 0 }}>
          <table className='table table-condensed ' style={{ marginBottom: 0 }}>
            <tbody>
            {this.getRows()}
            <tr>
              <td className='col-md-3 text-right' style={{ style }}><strong>Итого:</strong></td>
              <td className='col-md-1 text-right' style={{ style }}><strong>{this.state.summa}</strong></td>
              <td style={{ width: '1%', border: 0 }}></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>);
  }
}

DiscountPanel.propTypes = {
  actions: PropTypes.shape({
    del: PropTypes.func.isRequired
  }),
  discounts: PropTypes.array.isRequired
};

export default DiscountPanel;

