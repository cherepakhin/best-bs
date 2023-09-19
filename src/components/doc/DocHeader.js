import React from 'react';
import { formatDate } from '../../constants.js';

/**
 * Заголовок выписки
 */

class DocHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='panel-heading'>
        <div className='row' style={{ overflow: 'hidden' }}>
          <div id='numdoc' className='col-md-9'>
            {'Выписка № ' + this.props.doc.n + ' от ' +
          formatDate(this.props.doc.ddate)}
          </div>
          <div id='summaBonus' className='col-md-3 text-right'>
            {'Начислено бонусов: ' + this.props.doc.bonus}
          </div>
        </div>
      </div>
     );
  }
}

DocHeader.propTypes = {
  doc: React.PropTypes.shape({
    n: React.PropTypes.number.isRequired,
    ddate: React.PropTypes.string.isRequired,
    bonus: React.PropTypes.number.isRequired
  })
};

export default DocHeader;
