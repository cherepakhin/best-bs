import React from 'react';
import DocBody from '../DocBody.js';
import { shallow } from 'enzyme';
import DocItem from '../DocItem.js';

let props = {
  actions: {
    deleteDocItem: jest.fn()
  },
  doc: {
    docItems: [
    {
      n: 1,
      product: {
        n: 11,
        name: 'Товар'
      },
      price: 150,
      cenaOut: 100,
      qty: 1
    },    {
      n: 2,
      product: {
        n: 12,
        name: 'Товар'
      },
      price: 300,
      cenaOut: 200,
      qty: 2
    }

    ]
  }
};

describe('DocBody', ()=> {
  it('Итоги док-та', ()=> {
    let body = shallow(<DocBody {...props}/>);
    let sumByCena = props.doc.docItems.reduce((sum, item)=>sum + item.cenaOut * item.qty, 0);
    expect(body.instance().sumByCena).toBe(sumByCena);

    let sumByPrice = props.doc.docItems.reduce((sum, item)=>sum + item.price * item.qty, 0);
    expect(body.instance().sumByPrice).toBe(sumByPrice);

    expect(body.find('#sumByCena').text()).toBe(String(sumByCena));
    expect(body.find('#sumDiscount').text()).toBe(String(sumByCena - sumByPrice));
  });

  it('Проверка DocItems', ()=> {
    let body = shallow(<DocBody {...props}/>);
    let items = body.find(DocItem);
    expect(items.length).toBe(2);

    expect(items.at(0).props().docItem).toBe(props.doc.docItems[0]);
    expect(items.at(0).props().actions).toBe(props.actions);

    expect(items.at(1).props().docItem).toBe(props.doc.docItems[1]);
    expect(items.at(1).props().actions).toBe(props.actions);
  });
});
