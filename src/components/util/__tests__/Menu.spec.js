import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// import MenuItem from '../MenuItem.js';
import Menu from '../Menu.js';

const testFnOnClick1 = sinon.spy();
const testFnOnClick2 = sinon.spy();

const setup = function () {
  let props = {
    name: 'NAME_MENU',
    menuItems: [
      {
        title: 'MENU_ITEM_1',
        action: testFnOnClick1
      }, {
        title: 'MENU_ITEM_2',
        action: testFnOnClick2
      }
    ]
  };
  let menu = shallow(<Menu {...props}/>);
  return menu;
};

describe('Menu', () => {
  it('Название меню', () => {
    let menu = setup();
    expect(menu.find('.dropdown-toggle').text()).toBe('NAME_MENU');
    /*    wrapper.find('a').simulate('click');
        expect(testFnOnClick.calledOnce).toEqual(true);*/
  });

  it('Кол-во пунктов меню', () => {
    let menu = setup();
    expect(menu.find('MenuItem')).toHaveLength(2);
  });

  it('Передача параметров в пункты меню', () => {
    let menu = setup();
    let menuItems = menu.find('MenuItem');

    expect(menuItems.nodes[0].props.title).toEqual('MENU_ITEM_1');
    expect(menuItems.nodes[0].props.onClick).toEqual(testFnOnClick1);
    expect(menuItems.nodes[0].key).toEqual('MENU_ITEM_1');

    expect(menuItems.nodes[1].props.title).toEqual('MENU_ITEM_2');
    expect(menuItems.nodes[1].props.onClick).toEqual(testFnOnClick2);
    expect(menuItems.nodes[1].key).toEqual('MENU_ITEM_2');
  });
});
