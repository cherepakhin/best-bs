import React from 'react';
import { shallow } from 'enzyme';
import MenuBonus from '../MenuBonus.js';

let props = {
  actions: {
    openDlg: jest.fn()
  },
  doc: {}
};

describe('MenuBonus', ()=> {
  it('Компоновка', ()=> {
    let menu = shallow(<MenuBonus {...props}/>);
    expect(menu.props().menuItems.length).toBe(3);
    expect(menu.props().name).toBe('Бонусы');
  });
});
