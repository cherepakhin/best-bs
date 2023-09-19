import React from 'react';
import { shallow } from 'enzyme';
import DocItem from '../DocItem.js';
import BtnDel from '../BtnDel.js';

let props = {
  actions: {
      deleteDocItem: jest.fn()
    },
  docItem: {
    n: 1,
    product: {
      n: 11,
      name: 'Товар'
    },
    price: 150,
    cenaOut: 100,
    qty: 1
  }
};

describe('DocItem', ()=> {
  it('Передача параметров в BtnDel', ()=> {
    let item = shallow(<DocItem {...props}/>);
    let btn = item.find(BtnDel);
    expect(btn.props().action).toEqual(props.actions.deleteDocItem);
    expect(btn.props().obj).toEqual(props.docItem);
  });
  it('Значения полей', ()=> {
    let item = shallow(<DocItem {...props}/>);
    let fields = item.find('td');
    expect(fields.at(0).text()).toBe(String(props.docItem.product.n));
    expect(fields.at(1).text()).toBe(props.docItem.product.name);
    expect(fields.at(2).text()).toBe(String(props.docItem.price));
    expect(fields.at(3).text()).toBe(String(props.docItem.qty));
    expect(fields.at(4).text()).toBe(String((props.docItem.cenaOut - props.docItem.price) * props.docItem.qty));
    expect(fields.at(5).text()).toBe(String(props.docItem.cenaOut * props.docItem.qty));
  });
});

