import React from 'react';
import { shallow } from 'enzyme';
import MenuReports from '../MenuReports.js';

let props = {
  actions: {
    printToPdf: jest.fn()
  },
  doc: {},
  reports: ['Выписка', 'Счет', 'Накладная']
};

describe('MenuReports', ()=> {
  it('Компоновка', ()=> {
    let menu = shallow(<MenuReports {...props}/>);
    expect(menu.props().menuItems.length).toBe(props.reports.length);
    expect(menu.props().name).toBe('Печать');
  });
});
