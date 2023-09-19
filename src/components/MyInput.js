import React from 'react';
import { Input } from 'react-bootstrap';

class MyInput extends React.Component {

  handleKeyPress(target) {
    if (target.charCode == 13) {
      alert('Enter clicked!!!');
    }

  }

  render() {
    return <Input type='text' onKeyPress={this.handleKeyPress} />;
  }
}

export default MyInput;
