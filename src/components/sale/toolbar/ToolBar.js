import React from 'react';
// import Buterbrod from '../../util/Buterbrod.js';
import ComboGroupT from './ComboGroupT.js';
import SearchString from './SearchString.js';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <nav className='navbar navbar-inverse' role='navigation'>
        <div className='container-fluid'>
{/*          <Buterbrod />
          <div className='collapse navbar-collapse' id='navbar-menu'>
*/}
          <div className='navbar-collapse' id='navbar-menu'>
            <ComboGroupT
              actions={{ selectGroupT: this.props.actions.selectGroupT }}
              onRest={this.props.onRest}
              groups={this.props.groups}
            />
            <SearchString
              actions={{ getByName: this.props.actions.getByName }}
              onRest={this.props.onRest}
            />
          </div>
        </div>
      </nav>
    );
  }
}

ToolBar.propTypes = {
  actions: React.PropTypes.shape({
    selectGroupT: React.PropTypes.func.isRequired,
    getByName: React.PropTypes.func.isRequired
  }).isRequired,
  onRest: React.PropTypes.bool.isRequired,
  groups: React.PropTypes.array.isRequired
};

export default ToolBar;

