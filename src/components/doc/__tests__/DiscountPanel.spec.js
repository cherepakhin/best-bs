import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import DiscountPanel from '../DiscountPanel.js';
import BtnDel from '../BtnDel.js';

let props = {
  actions: {
    del: jest.fn()
  },
  discounts: [
    { n: 0, name: 'Скидка 3%', summa: 100 },
    { n: 1, name: 'Бонусы', summa: 200 }
  ]
};

describe('DiscountPanel', ()=> {

  it('Сумма всех скидок', ()=> {
    let panel = new DiscountPanel(props);
    let summa = panel.calcSum(props.discounts);
    expect(summa).toBe(300);
  });

  it('Строки платежей', ()=> {
    let panel = mount(<DiscountPanel {...props}/>);
    let rowsPay = panel.find('tbody > tr');
    expect(rowsPay.length).toBe(3);

    let td = rowsPay.at(0).find('td');
    expect(td.at(0).text()).toBe(props.discounts[0].name);
    expect(td.at(1).text()).toBe(String(props.discounts[0].summa));

    td = rowsPay.at(1).find('td');
    expect(td.at(0).text()).toBe(props.discounts[1].name);
    expect(td.at(1).text()).toBe(String(props.discounts[1].summa));

    td = rowsPay.at(2).find('td');
    expect(td.at(0).text()).toBe('Итого:');
    expect(td.at(1).text()).toBe(String(300));
  });

  it('Кнопки "Удалить"', ()=> {
    let panel = mount(<DiscountPanel {...props}/>);
    let btns = panel.find(BtnDel);
    expect(btns.length).toBe(2);
    expect(btns.at(0).props().action).toEqual(props.actions.del);
    expect(btns.at(0).props().obj).toEqual(props.discounts[0]);

    expect(btns.at(1).props().action).toEqual(props.actions.del);
    expect(btns.at(1).props().obj).toEqual(props.discounts[1]);
  });
});
