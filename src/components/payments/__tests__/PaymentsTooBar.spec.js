import React from 'react';
import { shallow } from 'enzyme';

import PaymentsToolBar from '../PaymentsToolBar.js';
import Buterbrod from '../../util/Buterbrod.js';
import DatePickerRU from '../../util/DatePickerRU';

let today = new Date().toISOString().slice(0, 10);

let props = {
  actions: {
    getByDate: jest.fn()
  },
  ddate: today
};

describe('PaymentsToolBar', ()=> {
  it('Проверка ButerBrod', ()=> {
    let toolbar = shallow(<PaymentsToolBar {...props}/>);
    expect(toolbar.find(Buterbrod)).toBeDefined();
  });

  it('Проверка DatePickerRU', ()=> {
    let toolbar = shallow(<PaymentsToolBar {...props}/>);
    expect(toolbar.find(DatePickerRU)).toBeDefined();
  });
});
