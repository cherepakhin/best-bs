import React from 'react';

import { Form, FormGroup,FormControl } from 'react-bootstrap';
// import Buterbrod from '../util/Buterbrod.js';

// TODO: Может заменить на стандартный календарь HTML5
// import DatePickerRU from '../util/DatePickerRU';

class DocsToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  handleChange (e) {
    // console.log('value');
    // console.log(e.target.value);
    // let ddate = new Date(Date.parse(value));
    this.props.actions.getByDate(e.target.value);
  }

  render () {
    return (
      <nav className='navbar navbar-inverse' role='navigation'>
        <div className='container-fluid'>
{/*          <Buterbrod />*/}
          <div className='navbar-collapse' id='navbar-menu'>
            <ul className='nav navbar-nav'>
              <li className='dropdown'>
                <Form inline>
                  <FormGroup>
                    <FormControl
                      type='date'
                      onChange={this.handleChange}
                    />

{/*                    <input type='date' className='form-control' id='dateDocs' onChange={this.handleChange}/>*/}
{/*                    <DatePickerRU
                      ddate={this.props.ddate}
                      handleChange={this.handleChange}
                    />*/}
                  </FormGroup>
                </Form>
              </li>
            </ul>
          </div>
        </div>
      </nav>);
  }
}

DocsToolBar.propTypes = {
  actions: React.PropTypes.shape({
    getByDate: React.PropTypes.func.isRequired
  }).isRequired,
  ddate: React.PropTypes.string.isRequired
};

export default DocsToolBar;

