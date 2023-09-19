import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocsToolBar from '../components/docs/DocsToolBar';
import DocsContent from '../components/docs/DocsContent';
import * as DocsActions from '../actions/DocsActions';

class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <DocsToolBar
            ddate={this.props.ddate}
            actions={this.props.actions}
          />
          <DocsContent
            docs={this.props.docs}
            actions={this.props.actions}
          />
        </div>
      </div>);
  }
}

Docs.propTypes = {
  actions: React.PropTypes.shape({
    getDocByN: React.PropTypes.func.isRequired,
    getByDate: React.PropTypes.func.isRequired
  }).isRequired,
  ddate: React.PropTypes.string.isRequired,
  docs: React.PropTypes.array.isRequired
};

export {Docs};

const mapStateToProps = function (state) {
  // console.log(state);
  return state.docs;
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(DocsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Docs);

