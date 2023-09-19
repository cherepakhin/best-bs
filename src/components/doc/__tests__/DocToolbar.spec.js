import React from 'react';
import { shallow } from 'enzyme';

import DocToolBar from '../DocToolBar.js';

import MenuDiscounts from '../toolbar/MenuDiscounts.js';
import MenuTypePayments from '../toolbar/MenuTypePayments.js';
import MenuReports from '../toolbar/MenuReports.js';
import MenuBonus from '../toolbar/MenuBonus.js';

let props = {
  actions: {
    openDlg: jest.fn(),
    doc: {
      printToPdf: jest.fn(),
      createDoc: jest.fn()
    },
    payment: {
      create: jest.fn()
    }
  },
  doc: {},
  typePayments: [],
  reports: []
};

describe('DocToolbar', ()=> {
  it('Проверка MenuTypePayments', ()=> {
    let toolbar = shallow(<DocToolBar {...props}/>);

    let menu = toolbar.find(MenuTypePayments);

    expect(menu).toBeDefined();
    expect(menu.props().typePayments).toBe(props.typePayments);
    expect(menu.props().doc).toBe(props.doc);
    expect(menu.props().actions).toBe(props.actions);
  });

  it('Проверка MenuDiscounts', ()=> {
    let toolbar = shallow(<DocToolBar {...props}/>);

    let menu = toolbar.find(MenuDiscounts);

    expect(menu).toBeDefined();
    expect(menu.props().doc).toBe(props.doc);
    expect(menu.props().actions).toBe(props.actions);
  });

  it('Проверка MenuReports', ()=> {
    let toolbar = shallow(<DocToolBar {...props}/>);

    let menu = toolbar.find(MenuReports);

    expect(menu).toBeDefined();
    expect(menu.props().reports).toBe(props.reports);
    expect(menu.props().doc).toBe(props.doc);
    expect(menu.props().actions).toBe(props.actions.doc);
  });

  it('Проверка MenuBonus', ()=> {
    let toolbar = shallow(<DocToolBar {...props}/>);

    let menu = toolbar.find(MenuBonus);

    expect(menu).toBeDefined();
    expect(menu.props().doc).toBe(props.doc);
    expect(menu.props().actions).toBe(props.actions);
  });
});
