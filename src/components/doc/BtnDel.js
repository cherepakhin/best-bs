import React from 'react';
import PropTypes from 'prop-types';

class BtnDel extends React.Component{
  constructor(props) {
    super(props);
    this.handlerDelete = ::this.handlerDelete;
  }

  handlerDelete () {
    this.props.action(this.props.obj);
  }

  render () {
    return (
      <td
        style={{ width: '1%', cursor: 'pointer', border: 0 }}
        title='Удалить'
        onClick={this.handlerDelete}>
        <span
          className='glyphicon glyphicon-remove-sign'
          aria-hidden='true'>
        </span>
      </td>);
  }
}

BtnDel.propTypes = {
  action: PropTypes.func.isRequired, // функция удаления
  obj: PropTypes.object.isRequired // объект для удаления
};

export default BtnDel;



