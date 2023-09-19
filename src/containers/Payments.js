import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaymentsToolBar from '../components/payments/PaymentsToolBar';
import * as PaymentActions from '../actions/PaymentActions';
import PaymentsContent from '../components/payments/PaymentsContent';

class Payments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <PaymentsToolBar
            ddate={this.props.ddate}
            actions={this.props.actions}
          />
          <PaymentsContent
            payments={this.props.payments}
            actions={this.props.actions}
          />
        </div>
      </div>);
  }
}

Payments.propTypes = {
  actions: React.PropTypes.shape({
    getByDate: React.PropTypes.func.isRequired
  }).isRequired,
  ddate: React.PropTypes.string.isRequired,
  payments: React.PropTypes.array.isRequired
};

const mapStateToProps = function (state) {
  return state.payments;
};

export {Payments};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(PaymentActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

