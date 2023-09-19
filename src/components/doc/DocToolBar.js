import React from 'react';
import MenuDiscounts from './toolbar/MenuDiscounts.js';
import MenuTypePayments from './toolbar/MenuTypePayments.js';
import MenuReports from './toolbar/MenuReports.js';
import MenuBonus from './toolbar/MenuBonus.js';

/**
 * Toolbar для выписки
 */

class DocToolBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='navbar navbar-inverse' role='navigation'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button className='navbar-toggle'
              type='button'
              data-toggle='collapse'
              data-target='#navbar-search'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          </div>
          <div className='collapse navbar-collapse' id='navbar-search'>
            <ul className='nav navbar-nav'>
              <MenuDiscounts
                doc={this.props.doc}
                actions={this.props.actions}
              />
              <MenuTypePayments
                doc={this.props.doc}
                actions={this.props.actions}
                typePayments={this.props.typePayments}
              />
              <MenuReports
                doc={this.props.doc}
                actions={this.props.actions.doc}
                reports={this.props.reports}
              />
              <MenuBonus
                doc={this.props.doc}
                actions={this.props.actions}
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

DocToolBar.propTypes = {
  actions: React.PropTypes.shape({
    openDlg: React.PropTypes.func.isRequired,
    doc: React.PropTypes.shape({
      printToPdf: React.PropTypes.func.isRequired
    }).isRequired,
    payment: React.PropTypes.shape({
      create: React.PropTypes.func.isRequired
    })
  }),
  doc: React.PropTypes.object.isRequired,
  typePayments: React.PropTypes.array.isRequired,
  reports: React.PropTypes.array.isRequired
};

export default DocToolBar;
