import React from 'react';
import MenuItem from '../MenuItem.js';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const testFnOnClick = sinon.spy();

const setup = function () {
  let props = {
    title: 'NAME_MENU_ITEM',
    onClick: testFnOnClick
  };
  let menuItem = shallow(<MenuItem {...props}/>);
  return menuItem;
};

describe('MenuItem', () => {
  it('Назначение props', () => {
    let menuItem = setup();
    let wrapper = menuItem.find('a');
    expect(wrapper.text()).toBe('NAME_MENU_ITEM');
    wrapper.find('a').simulate('click');
    expect(testFnOnClick.calledOnce).toEqual(true);
  });
});
