import React from 'react';

let ReportMenuItem = React.createClass({
    componentDidMount: function () {
    },

    handleClick: function () {
        this.props.actions.printToPdf(this.props.doc, this.props.report);
      },

    render: function () {
        return <li>
            <a href='#'
               onClick={this.handleClick}
            >{this.props.report}</a>
        </li>;
      },

    propTypes: {
        actions: React.PropTypes.shape({
            printToPdf: React.PropTypes.func.isRequired
          }).isRequired,
        doc: React.PropTypes.object.isRequired,
        report: React.PropTypes.string.isRequired
      }
  });

export default ReportMenuItem;

