import React from 'react';
import { mount } from 'enzyme';
import DocsContent from '../DocsContent.js';
import { formatDate, formatMoney } from '../../../constants.js';
// import toJson from 'enzyme-to-json';

let today = new Date();

let props = {
  actions: {
    getDocByN: jest.fn()
  },
  docs: [
    { n: 11, ddate: today, summaOut: 110 },
    { n: 12, ddate: today, summaOut: 120 }
  ]
};

describe('DocsContent', ()=> {
  it('Проверка заголовка', ()=> {
    let content = mount(<DocsContent {...props}/>);
    let titles = content.find('th');
    expect(titles.length).toBe(4);
    expect(titles.at(0).text()).toBe('Номер');
    expect(titles.at(1).text()).toBe('Дата');
    expect(titles.at(2).text()).toBe('Сумма');
  });

  it('Проверка кол-ва строк', ()=> {
    let content = mount(<DocsContent {...props}/>);
    let rows = content.find('tbody > tr');

    // +1 для итоговой строки
    expect(rows.length).toBe(props.docs.length + 1);
  });

  it('Проверка содержимого строк(Первый док-т)', ()=> {
    let content = mount(<DocsContent {...props}/>);
    let rowsDoc = content.find('tbody > tr');

    // Первый док-т
    let vals = rowsDoc.at(0).find('td');
    expect(vals.length).toBe(4);
    expect(vals.at(0).text()).toBe(String(props.docs[0].n));
    expect(vals.at(1).text()).toBe(formatDate(props.docs[0].ddate));
    expect(vals.at(2).text()).toBe(formatMoney(props.docs[0].summaOut));
  });

  it('Проверка содержимого строк(Второй док-т)', ()=> {
    let content = mount(<DocsContent {...props}/>);
    let rowsDoc = content.find('tbody > tr');

    let vals = rowsDoc.at(1).find('td');
    expect(vals.length).toBe(4);
    expect(vals.at(0).text()).toBe(String(props.docs[1].n));
    expect(vals.at(1).text()).toBe(formatDate(props.docs[1].ddate));
    expect(vals.at(2).text()).toBe(formatMoney(props.docs[1].summaOut));
  });

  it('Проверка содержимого строк(Итоговая строка)', ()=> {
    let content = mount(<DocsContent {...props}/>);
    let rowsDoc = content.find('tbody > tr');

    let vals = rowsDoc.at(2).find('td');
    expect(vals.length).toBe(4);
    expect(vals.at(0).text()).toBe('');
    expect(vals.at(1).text()).toBe('Итого:');
    expect(vals.at(2).text()).toBe(formatMoney(230));
  });

  it('Клик на док-те', ()=> {
    let content = mount(<DocsContent {...props}/>);
    // expect(toJson(content)).toMatchSnapshot();
    let rowDoc = content.find('#11');
    expect(rowDoc.length).toBe(1);
    rowDoc.simulate('click');
    expect(props.actions.getDocByN.mock.calls.length).toBe(1);
  });

});
