import React from 'react';

/**
 * Крыжик для хар-ки
 */
class CheckBoxFeature extends React.Component {

  constructor(props) {
    super(props);
    this.toggleCheckbox = ::this.toggleCheckbox;
  }

  toggleCheckbox(val) {
    let selectedVal = this.props.checked;
    let index = selectedVal.indexOf(val);
    if (index == -1) {
      selectedVal.push(val);
    } else {
      selectedVal.splice(index, 1);
    }

    let feature = {
        name: this.props.feature.name,
        vals: selectedVal
      };
    this.props.handleCheck(feature);
  }

  isChecked(val) {
    return this.props.checked.includes(val.name);
  }

  render() {
    return (
      <div className='form-group' key={this.props.feature.name}>
        <label><strong>{this.props.feature.name}</strong></label>
        {this.props.feature.vals.map((val, index)=>(
        <div className='checkbox' key={index}>
          <label>
              <input
              key={index}
              type='checkbox'
              onChange={this.toggleCheckbox.bind(null, val.name)}
              checked={this.isChecked(val)}
          />
              {val.name}
          </label>
        </div>
      ))}
      </div>
    );
  }
}

CheckBoxFeature.propTypes = {
  feature: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    vals: React.PropTypes.array.isRequired
  }),
  handleCheck: React.PropTypes.func.isRequired,
  checked: React.PropTypes.array.isRequired
};

CheckBoxFeature.defaultProps = {
  feature: {
    name: '',
    vals: []
  }
};

export default CheckBoxFeature;

