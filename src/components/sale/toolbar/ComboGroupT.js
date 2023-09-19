import React from 'react';

class ComboGroupT extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSelectGroupT = ::this.handlerSelectGroupT;
  }

  handlerSelectGroupT (groupT) {
    this.props.actions.selectGroupT(groupT, this.props.onRest);
  }

  getGroups() {
    let _groups = this.props.groups.map((groupt) => {
        return (
          <li key={groupt.n}>
            <a href='#' onClick={this.handlerSelectGroupT.bind(null, groupt)}>
              {groupt.name}
            </a>
          </li>);
      });
    return _groups;
  }

  render() {
    return (
      <ul className='nav navbar-nav'>
        <li className='dropdown'>
          <a className='dropdown-toggle'
          href='#'
          data-toggle='dropdown'
          role='button'
          aria-haspopup='true'
          aria-expanded='false'>
            Каталог товаров <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            {this.getGroups()}
          </ul>
        </li>
      </ul>
    );
  }
}

ComboGroupT.propTypes = {
  actions: React.PropTypes.shape({
    selectGroupT: React.PropTypes.func.isRequired
  }).isRequired,
  onRest: React.PropTypes.bool.isRequired,
  groups: React.PropTypes.array.isRequired
};

export default ComboGroupT;
