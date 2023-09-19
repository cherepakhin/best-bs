import React from 'react';
import Menu from '../../util/Menu.js';

/**
 * Меню отчетов
 */
class MenuReports extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = [];
    this.props.reports.forEach((report, key) => {
      menuItems.push({
        key: key,
        title: report,
        action: this.props.actions.printToPdf.bind(this.props.doc, report)
      });
    });
    return <Menu menuItems={menuItems} name='Печать'/>;
  }
}

MenuReports.propTypes = {
  actions: React.PropTypes.shape({
    printToPdf: React.PropTypes.func.isRequired
  }).isRequired,
  doc: React.PropTypes.object.isRequired,
  reports: React.PropTypes.array.isRequired
};

export default MenuReports;
