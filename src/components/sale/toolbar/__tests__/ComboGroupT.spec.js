import React from 'react';
import { shallow, mount } from 'enzyme';
import ComboGroupT from '../ComboGroupT';

let props = {
  groups: [
  { n: 1, name: 'Группа1' },
  { n: 2, name: 'Группа2' }
  ],
  onRest: true,
  actions: {
    selectGroupT: jest.fn()
  }
};
describe('ComboGroupT', ()=> {
  it('Компоновка (render)', ()=> {
    let combo = shallow(<ComboGroupT {...props}/>);
    expect(combo.find('.dropdown-menu')).toHaveLength(1);
    expect(combo.find('.dropdown-menu').children()).toHaveLength(2);
    expect(combo.find('.dropdown-menu > li')).toHaveLength(2);
    expect(combo.find('.dropdown-menu > li > a')).toHaveLength(2);
    expect(combo.find('.dropdown-toggle')).toHaveLength(1);
    expect(combo.find('.dropdown-toggle').text()).toEqual('Каталог товаров ');

    expect(combo.find('.dropdown-menu > li > a').at(0).text()).toEqual('Группа1');
    expect(combo.find('.dropdown-menu > li > a').at(1).text()).toEqual('Группа2');
  });
  it('Клики', ()=> {
    let combo = mount(<ComboGroupT {...props}/>);
    // Клик по группе1
    combo.find('.dropdown-menu > li > a').at(0).simulate('click');
    expect(props.actions.selectGroupT.mock.calls.length).toBe(1);
    expect(props.actions.selectGroupT.mock.calls[0][0]).toEqual(props.groups[0]);
    expect(props.actions.selectGroupT.mock.calls[0][1]).toEqual(props.onRest);

    // Клик по группе2
    combo.find('.dropdown-menu > li > a').at(1).simulate('click');
    expect(props.actions.selectGroupT.mock.calls.length).toBe(2);
    expect(props.actions.selectGroupT.mock.calls[1][0]).toEqual(props.groups[1]);
    expect(props.actions.selectGroupT.mock.calls[1][1]).toEqual(props.onRest);
  });
});
