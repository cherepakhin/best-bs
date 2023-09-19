import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DocActions from '../actions/DocActions';
import ModalRoot from '../components/ModalRoot';
import HeadInfo from '../components/sale/HeadInfo';
import initVar from '../actions/InitVarActions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Стартовая загрузка
    // console.log(this.props);
    this.props.actions.initVar();
  }

  render() {
    return (
      <div>
        <ModalRoot actions={this.props.dlgActions}/>
        <div className='loading'
          hidden={!this.props.app.progress}>Loading&#8230;
        </div>
        <HeadInfo doc={this.props.doc} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  actions: React.PropTypes.shape({
    initVar: React.PropTypes.func.isRequired
  }).isRequired,
  dlgActions: React.PropTypes.object,
  app: React.PropTypes.shape({
    progress: React.PropTypes.bool.isRequired
  }),
  doc: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired
};

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: {
      doc: bindActionCreators(DocActions, dispatch),
      initVar: bindActionCreators(initVar, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
