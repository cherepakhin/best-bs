import React from 'react';
import { shallow } from 'enzyme';

import ProductCena from '../ProductCena.js';
import BthAddToDoc from '../BthAddToDoc.js';

let props = {
  doc: {},
  actions: {
    addDocItem: jest.fn()
  },
  price: {
    index: 0,
    product: {
      n: 0,
      name: ''
    },
    cena: 10
  }
};

describe('ProductCena', ()=> {
  it('Цена', ()=> {
    let cenaElement = shallow(<ProductCena {...props}/>);
    let cena = cenaElement.find('h2 > strong');
    expect(cena.text() * 1).toBe(props.price.cena);
  });

  it('Передача параметров в BtnAddToDoc', ()=> {
    let cenaElement = shallow(<ProductCena {...props}/>);
    let bthAddToDoc = cenaElement.find(BthAddToDoc);
    expect(bthAddToDoc.props().price).toEqual(props.price);
    expect(bthAddToDoc.props().actions).toEqual(props.actions);
    expect(bthAddToDoc.props().doc).toEqual(props.doc);
  });
});
