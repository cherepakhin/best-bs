import React from 'react';
import { shallow } from 'enzyme';

import { Payments } from '../Payments.js';
import PaymentsContent from '../../components/payments/PaymentsContent.js';
import PaymentsToolBar from '../../components/payments/PaymentsToolBar.js';

let ddate = new Date().toISOString().slice(0, 10);

let props = {
  actions: {
    getByDate: jest.fn()
  },
  ddate: ddate,
  payments: [{ n: 1 }, { n: 2 }]
};

describe('Payments container', () => {
  it('Проверка PaymentsToolBar', ()=> {
    let container = shallow(<Payments {...props}/>);
    let toolBar = container.find(PaymentsToolBar);
    expect(toolBar).toBeDefined();
    expect(toolBar.props().actions).toEqual(props.actions);
    expect(toolBar.props().ddate).toEqual(props.ddate);
  });

  it('Проверка PaymentsContent', ()=> {
    let container = shallow(<Payments {...props}/>);
    let content = container.find(PaymentsContent);
    expect(content).toBeDefined();
    expect(content.props().actions).toEqual(props.actions);
    expect(content.props().payments).toEqual(props.payments);
  });

});

