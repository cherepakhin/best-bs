import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolBar from '../components/sale/toolbar/ToolBar';
import SaleContent from '../components/sale/SaleContent';

import * as GroupTActions from '../actions/GroupTActions';
import * as PriceActions from '../actions/PriceActions';
import * as DocActions from '../actions/DocActions';

class Sale extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ background: '#f7f7f7' }}>
          <ToolBar
            actions={{ ...this.props.actions.prices, ...this.props.actions.groupt }}
            groups={this.props.app.groups}
            onRest={this.props.sale.onRest}
            queryFeature={this.props.sale.queryFeature}
          />
          <SaleContent
            selectedGroupT={this.props.sale.selectedGroupT}
            actions={this.props.actions}
            prices={this.props.sale.prices}
            doc={this.props.doc}
            onRest={this.props.sale.onRest}
            queryFeature={this.props.sale.queryFeature}
          />
        </div>
      </div>
    );
  }
}

Sale.propTypes = {
  actions: React.PropTypes.shape({
    doc: React.PropTypes.shape({
      addDocItem: React.PropTypes.func.isRequired
    }).isRequired,
    prices: React.PropTypes.shape({
      getByFilter: React.PropTypes.func.isRequired,
      getByName: React.PropTypes.func.isRequired,
      setOnRest: React.PropTypes.func.isRequired,
      resort: React.PropTypes.func.isRequired
    }).isRequired,
    groupt: React.PropTypes.shape({
      selectGroupT: React.PropTypes.func.isRequired,
      getAllPricesByGroupT: React.PropTypes.func.isRequired
    }).isRequireds
  }).isRequired,
  app: React.PropTypes.shape({
    groups: React.PropTypes.array.isRequired
  }).isRequired,
  sale: React.PropTypes.shape({
    selectedGroupT: React.PropTypes.object.isRequired,
    onRest: React.PropTypes.bool.isRequired,
    prices: React.PropTypes.array.isRequired,
    queryFeature: React.PropTypes.array.isRequired
  }).isRequired,
  doc: React.PropTypes.object.isRequired
};

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: {
      groupt: bindActionCreators(GroupTActions, dispatch),
      prices: bindActionCreators(PriceActions, dispatch),
      doc: bindActionCreators(DocActions, dispatch)
    }
  };
};

export {Sale};
export default connect(mapStateToProps, mapDispatchToProps)(Sale);

