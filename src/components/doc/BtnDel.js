import React from 'react';

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
  action: React.PropTypes.func.isRequired, // функция удаления
  obj: React.PropTypes.object.isRequired // объект для удаления
};

export default BtnDel;

