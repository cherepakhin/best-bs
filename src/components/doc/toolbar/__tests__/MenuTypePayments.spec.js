import React from 'react';
import { shallow } from 'enzyme';
import MenuTypePayments from '../MenuTypePayments.js';

let props = {
  actions: {
    openDlg: jest.fn()
  },
  doc: {},
  typePayments: [
    { n: 0, name: 'Наличные' },
    { n: 1, name: 'Терминал' }
  ]
};

describe('MenuActions', ()=> {
  it('Компоновка', ()=> {
    let menu = shallow(<MenuTypePayments {...props}/>);
    expect(menu.props().menuItems.length).toBe(props.typePayments.length);
    expect(menu.props().name).toBe('Оплатить');
  });
});
