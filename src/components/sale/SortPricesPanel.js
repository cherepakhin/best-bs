import React from 'react';
import ComboSortPrice from './ComboSortPrice.js';
import CheckBoxOnRest from './CheckBoxOnRest.js';
/**
 * Панель выбором сортировки товаров и признака "На остатках"
 */
class SortPricesPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='form-inline'>
        <ComboSortPrice resort={this.props.actions.prices.resort}/>
        {' '}
        <CheckBoxOnRest setOnRest={this.props.actions.prices.setOnRest}/>
        <p></p>
    </form>
    );
  }
}

SortPricesPanel.propTypes = {
  actions: React.PropTypes.shape({
    prices: React.PropTypes.shape({
      resort: React.PropTypes.func.isRequired,
      setOnRest: React.PropTypes.func.isRequired
    })
  }).isRequired,
  docItem: React.PropTypes.object
};

export default SortPricesPanel;

