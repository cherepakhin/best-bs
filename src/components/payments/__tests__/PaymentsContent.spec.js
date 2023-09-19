import React from 'react';
import { mount } from 'enzyme';
import PaymentsContent from '../PaymentsContent.js';
import { formatDate, formatMoney } from '../../../constants.js';
// import toJson from 'enzyme-to-json';

let today = new Date();
today.setHours(0, 0, 0, 0);
let yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
let typeMovementPayment = { n: 0, name: 'Продажи' };
let contact = { n: 0, name: 'Розничный пок-ль' };
let typePayment = {
  n: 1,
  name: 'Наличные'
};

let props = {
  actions: {
    getDocByN: jest.fn()
  },
  payments: [
      {
      n: 10,
      ddate: yesterday,
      summa: 210,
      typePayment: typePayment,
      docN: 21,
      typeMovementPayment: typeMovementPayment,
      contact: contact,
      doc: 1
    },
    {
    n: 20,
    ddate: yesterday,
    summa: 220,
    typePayment: typePayment,
    docN: 22,
    typeMovementPayment: typeMovementPayment,
    contact: contact,
    doc: 2
  }
  ]
};

describe('PaymentsContent', ()=> {
  it('Проверка заголовка', ()=> {
    let content = mount(<PaymentsContent {...props}/>);
    let vals = content.find('th');
    expect(vals.length).toBe(8);
    expect(vals.at(0).text()).toBe('Номер');
    expect(vals.at(1).text()).toBe('Дата');
    expect(vals.at(2).text()).toBe('Док-т');
    expect(vals.at(3).text()).toBe('Статья');
    expect(vals.at(4).text()).toBe('Чем оплачено');
    expect(vals.at(5).text()).toBe('Контрагент');
    expect(vals.at(6).text()).toBe('Сумма');
  });

  it('Проверка кол-ва строк', ()=> {
    let content = mount(<PaymentsContent {...props}/>);
    let rows = content.find('tbody > tr');

    // +1 для итоговой строки
    expect(rows.length).toBe(props.payments.length + 1);
  });

  it('Проверка содержимого строк(Первый док-т)', ()=> {
    let content = mount(<PaymentsContent {...props}/>);
    let rowsDoc = content.find('tbody > tr');

    let vals = rowsDoc.at(0).find('td');
    expect(vals.length).toBe(8);
    expect(vals.at(0).text()).toBe(String(props.payments[0].n));
    expect(vals.at(1).text()).toBe(formatDate(props.payments[0].ddate));
    expect(vals.at(2).text() * 1).toBe(props.payments[0].doc);
    expect(vals.at(3).text()).toBe(props.payments[0].typeMovementPayment.name);
    expect(vals.at(4).text()).toBe(props.payments[0].typePayment.name);
    expect(vals.at(5).text()).toBe(props.payments[0].contact.name);
    expect(vals.at(6).text()).toBe(formatMoney(props.payments[0].summa));
  });

  it('Проверка содержимого строк(Второй док-т)', ()=> {
    let content = mount(<PaymentsContent {...props}/>);
    let rowsDoc = content.find('tbody > tr');

    let vals = rowsDoc.at(1).find('td');
    expect(vals.length).toBe(8);
    expect(vals.at(0).text()).toBe(String(props.payments[1].n));
    expect(vals.at(1).text()).toBe(formatDate(props.payments[1].ddate));
    expect(vals.at(2).text() * 1).toBe(props.payments[1].doc);
    expect(vals.at(3).text()).toBe(props.payments[1].typeMovementPayment.name);
    expect(vals.at(4).text()).toBe(props.payments[1].typePayment.name);
    expect(vals.at(5).text()).toBe(props.payments[1].contact.name);
    expect(vals.at(6).text()).toBe(formatMoney(props.payments[1].summa));
  });

  it('Проверка содержимого строк(Итоговая строка)', ()=> {
    let content = mount(<PaymentsContent {...props}/>);
    let rowsDoc = content.find('tbody > tr');

    let vals = rowsDoc.at(2).find('td');
    expect(vals.length).toBe(8);
    expect(vals.at(0).text()).toBe('');
    expect(vals.at(1).text()).toBe('');
    expect(vals.at(2).text()).toBe('');
    expect(vals.at(3).text()).toBe('');
    expect(vals.at(4).text()).toBe('');
    expect(vals.at(5).text()).toBe('Итого:');
    expect(vals.at(6).text()).toBe(formatMoney(props.payments[0].summa + props.payments[1].summa));
  });

});
