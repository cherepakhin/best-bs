import React from 'react';
import { shallow } from 'enzyme';

import DocsToolBar from '../DocsToolBar.js';
import Buterbrod from '../../util/Buterbrod.js';
import DatePickerRU from '../../util/DatePickerRU';

let today = new Date().toISOString().slice(0, 10);

let props = {
  actions: {
    getByDate: jest.fn()
  },
  ddate: today
};

describe('DocsToolbar', ()=> {
  it('Проверка ButerBrod', ()=> {
    let toolbar = shallow(<DocsToolBar {...props}/>);
    expect(toolbar.find(Buterbrod)).toBeDefined();
  });

  it('Проверка DatePickerRU', ()=> {
    let toolbar = shallow(<DocsToolBar {...props}/>);
    expect(toolbar.find(DatePickerRU)).toBeDefined();
  });
});
