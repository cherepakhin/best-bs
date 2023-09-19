import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckBoxOnRest from '../CheckBoxOnRest.js';

let props = {
  setOnRest: jest.fn()
};

describe('CheckBoxOnRest', ()=> {
  it('Компоновка (render)', ()=> {
    let checkBoxOnRest = shallow(<CheckBoxOnRest {...props}/>);
    expect(checkBoxOnRest.find('label').text()).toEqual(' Есть на остатках');
  });

  it('Снять крыжик', ()=> {
    let checkBoxOnRest = mount(<CheckBoxOnRest {...props}/>);
    checkBoxOnRest.find('input').simulate('change', { target: { checked: true } });
    expect(props.setOnRest.mock.calls.length).toBe(1);
    expect(props.setOnRest.mock.calls[0][0]).toBe(true);
  });

  it('Поставить крыжик', ()=> {
    props.setOnRest = jest.fn();
    let checkBoxOnRest = mount(<CheckBoxOnRest {...props}/>);
    checkBoxOnRest.find('input').simulate('change', { target: { checked: false } });

    // checkBoxOnRest.find('input').simulate('change', { target: { checked: false } });
    // expect(props.actions.setOnRest.mock.calls.length).toBe(2);
    expect(props.setOnRest.mock.calls[0][0]).toBe(false);
  });
});
