import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocToolBar from '../components/doc/DocToolBar';
import DocContent from '../components/doc/DocContent';

import * as DocActions from '../actions/DocActions';
import * as PaymentActions from '../actions/PaymentActions';
import * as DiscountActions from '../actions/DiscountActions.js';
import openDlg from '../actions/ModalActions';

class Doc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <DocToolBar
        doc={this.props.doc}
        typePayments={this.props.app.typePayments}
        actions={this.props.actions}
        reports={this.props.app.reports}
      />
      <DocContent
        doc={this.props.doc}
        actions={this.props.actions}
      />
    </div>;
  }
}

Doc.propTypes = {
  actions: React.PropTypes.shape({
    openDlg: React.PropTypes.func.isRequired,
    doc: React.PropTypes.shape({
      deleteDocItem: React.PropTypes.func.isRequired
    }).isRequired,
    payment: React.PropTypes.shape({
      create: React.PropTypes.func.isRequired
    }).isRequired,
    discount: React.PropTypes.shape({
      del: React.PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  doc: React.PropTypes.shape({
    n: React.PropTypes.number.isRequired,
    bonus: React.PropTypes.number.isRequired,
    docItems: React.PropTypes.array.isRequired
  }).isRequired,
  app: React.PropTypes.shape({
    reports: React.PropTypes.array.isRequired,
    typePayments: React.PropTypes.array.isRequired
  }).isRequired
};

export {Doc};

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: {
      openDlg: bindActionCreators(openDlg, dispatch),
      doc: bindActionCreators(DocActions, dispatch),
      payment: bindActionCreators(PaymentActions, dispatch),
      discount: bindActionCreators(DiscountActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doc);
