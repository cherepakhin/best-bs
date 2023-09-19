import React from 'react';

/**
* CheckBox признака "На остатках"
*/
class CheckBoxOnRest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.toggleCheckbox = ::this.toggleCheckbox;
  }

  toggleCheckbox(event) {
    this.setState({ isChecked: !this.state.isChecked });
    /*    this.setState({ isChecked: !this.state.isChecked });
        this.props.actions.setOnRest(!this.state.isChecked);*/

    // console.log(event.target.checked);

    this.props.setOnRest(event.target.checked);
  }

  render() {
    return (
      <div className='form-group'>
        <div className='checkbox'>
          <label>
            <input
            type='checkbox'
            checked={this.state.isChecked}
            onChange={this.toggleCheckbox}
          /> Есть на остатках
          </label>
        </div>
      </div>
    );
  }
}

CheckBoxOnRest.propTypes = {
  setOnRest: React.PropTypes.func.isRequired
};

export default CheckBoxOnRest;
