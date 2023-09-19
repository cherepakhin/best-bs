import React from 'react';

class ComboSortPrice extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  handleChange(event) {
    this.props.resort(event.target.value);
  }

  render() {
    return (
       <div className='form-group'>
        <label style={{ paddingRight: 10 }}>Сортировать по</label>
        <select className='form-control' onChange={this.handleChange}>
          <option>цене(по возрастанию)</option>
          <option>цене(по убыванию)</option>
          <option>по названию</option>
        </select>
      </div>
    );
  }
}

ComboSortPrice.propTypes = {
  resort: React.PropTypes.func.isRequired
};

export default ComboSortPrice;
