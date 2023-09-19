import React from 'react';
import { shallow } from 'enzyme';
import MenuDiscounts from '../MenuDiscounts.js';
import mapDiscount from '../../mapDiscountDlg.js';

let props = {
  actions: {
    openDlg: jest.fn()
  },
  doc: {}
};

describe('MenuActions', ()=> {
  it('Компоновка', ()=> {
    let menu = shallow(<MenuDiscounts {...props}/>);
    expect(menu.props().menuItems.length).toBe(mapDiscount.size);
    expect(menu.props().name).toBe('Акции');
  });

  /*  it('Проверка передачи props d пункты меню', ()=> {
      let menu = shallow(<MenuDiscounts {...props}/>);
      let menuItems = menu.props().menuItems;
      for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        expect(item.action).toEqual(props.actions.openDlg.bind(null, item.key, { doc: props.doc }));
      }
    });
  */
});
