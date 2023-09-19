import React from 'react';
import Filter from './Filter';
import Prices from './price/Prices';
import SortPricesPanel from './SortPricesPanel';

class SaleContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid' style={{ background: '#f7f7f7' }}>
        <div className='row'>
          <Filter
            groupT={this.props.selectedGroupT}
            actions={this.props.actions.prices}
            onRest={this.props.onRest}
            queryFeature={this.props.queryFeature}
          />
          <div className='col-md-10'>
            <SortPricesPanel actions={this.props.actions}/>
            <Prices
              actions={this.props.actions.doc}
              prices={this.props.prices}
              doc={this.props.doc}
            />
          </div>
        </div>
      </div>);
  }
}

SaleContent.propTypes = {
  actions: React.PropTypes.shape({
    doc: React.PropTypes.shape({
      addDocItem: React.PropTypes.func.isRequired
    }).isRequired,
    prices: React.PropTypes.shape({
      getByFilter: React.PropTypes.func.isRequired,
      resort: React.PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  doc: React.PropTypes.object.isRequired,
  selectedGroupT: React.PropTypes.object.isRequired,
  onRest: React.PropTypes.bool.isRequired,
  prices: React.PropTypes.array.isRequired,
  queryFeature: React.PropTypes.array.isRequired
};

export default SaleContent;

