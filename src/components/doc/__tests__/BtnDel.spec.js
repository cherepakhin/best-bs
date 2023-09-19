import React from 'react';
import { shallow } from 'enzyme';

import BtnDel from '../BtnDel.js';

let props = {
  action: jest.fn(),
  obj: {}
};

describe('BtnDel', ()=> {
  it('Создание', ()=> {
    let btn = shallow(<BtnDel {...props}/>);
    btn.simulate('click');
    expect(props.action.mock.calls.length).toBe(1);
    expect(props.action.mock.calls[0][0]).toEqual(props.obj);
  });
});

