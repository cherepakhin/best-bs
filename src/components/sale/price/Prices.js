import React from 'react';

import PricePanel from './PricePanel.js';

class Prices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pricePanels = this.props.prices.map((price, index) => {
        return <PricePanel
          key={index}
          price={price}
          doc={this.props.doc}
          index={index}
          actions={this.props.actions}
        />;
      }
    );
    return <div> {pricePanels}</div>;
  }
}

Prices.propTypes = {
  actions: React.PropTypes.shape({
      addDocItem: React.PropTypes.func.isRequired
    }),
  doc: React.PropTypes.object.isRequired,
  prices: React.PropTypes.array.isRequired
};

export default Prices;
