import React from 'react';

/**
 * Строка меню
 * @param  {function} onClick - Фунция выбора
 * @param  {String} title - название
 * @param [Object] params - параметры для передачи в функцию выбоа
 */
class MenuItem extends  React.Component{
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
  }

  handleClick () {
    this.props.onClick();
  }

  render() {
    return <li>
        <a href = '#'
            onClick = {this.handleClick}>
            {this.props.title}
        </a>
    </li>;
  }
}

MenuItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

MenuItem.defaultProps = {
  title: '',
  onClick: function () {}
};

export default MenuItem;
