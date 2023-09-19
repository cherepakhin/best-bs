import React from 'react';
import { mount } from 'enzyme';
import PaymentPanel from '../PaymentPanel.js';
import BtnDel from '../BtnDel.js';

let props = {
  actions: {
    del: jest.fn()
  },
  payments: [
    { n: 0,
      typePayment: {
        n: 1,
        name: 'Наличные'
      },
      summa: 100
    },
    { n: 1,
      typePayment: {
        n: 2,
        name: 'Терминал'
      },
      summa: 200 }
  ]
};

describe('PaymentPanel', ()=> {

  it('Сумма всех платежей', ()=> {
    let panel = new PaymentPanel(props);
    let summa = panel.calcSum(props.payments);
    expect(summa).toBe(300);
  });

  it('Строки платежей', ()=> {
    let panel = mount(<PaymentPanel {...props}/>);
    let rowsPay = panel.find('tbody > tr');
    expect(rowsPay.length).toBe(3);

    let td = rowsPay.at(0).find('td');
    expect(td.at(0).text()).toBe(props.payments[0].typePayment.name);
    expect(td.at(1).text()).toBe(String(props.payments[0].summa));

    td = rowsPay.at(1).find('td');
    expect(td.at(0).text()).toBe(props.payments[1].typePayment.name);
    expect(td.at(1).text()).toBe(String(props.payments[1].summa));

    td = rowsPay.at(2).find('td');
    expect(td.at(0).text()).toBe('Итого:');
    expect(td.at(1).text()).toBe(String(300));
  });

  it('Кнопки "Удалить"', ()=> {
    let panel = mount(<PaymentPanel {...props}/>);
    let btns = panel.find(BtnDel);
    expect(btns.length).toBe(2);
    expect(btns.at(0).props().action).toEqual(props.actions.del);
    expect(btns.at(0).props().obj).toEqual(props.payments[0]);

    expect(btns.at(1).props().action).toEqual(props.actions.del);
    expect(btns.at(1).props().obj).toEqual(props.payments[1]);
  });
});
