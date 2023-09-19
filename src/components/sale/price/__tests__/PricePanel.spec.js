import React from 'react';
import { shallow } from 'enzyme';

import PricePanel from '../PricePanel.js';
import ProductImage from '../ProductImage.js';
import ProductName from '../ProductName.js';
import ProductCena from '../ProductCena.js';

let props = {
  doc: {},
  actions: {
    addDocItem: jest.fn()
  },
  price: {
    index: 0,
    product: {
      n: 0,
      name: '',
      thumb: '',
      features: []
    },
    cena: 0
  }
};

describe('PricePanel', ()=> {
  it('Компоновка', ()=> {
    let prices = shallow(<PricePanel {...props}/>);
    let image = prices.find(ProductImage);
    expect(image.length).toBe(1);

    let name = prices.find(ProductName);
    expect(name.length).toBe(1);

    let cena = prices.find(ProductCena);
    expect(cena.length).toBe(1);
  });

  it('Передача параметров в ProductImage', ()=> {
    let prices = shallow(<PricePanel {...props}/>);
    let image = prices.find(ProductImage);
    expect(image.props().product).toEqual(props.price.product);
  });

  it('Передача параметров в ProductName', ()=> {
    let prices = shallow(<PricePanel {...props}/>);
    let productName = prices.find(ProductName);
    expect(productName.props().product).toEqual(props.price.product);
  });

  it('Передача параметров в ProductCena', ()=> {
    let prices = shallow(<PricePanel {...props}/>);
    let productCena = prices.find(ProductCena);
    expect(productCena.props().price).toEqual(props.price);
    expect(productCena.props().doc).toEqual(props.doc);
    expect(productCena.props().actions).toEqual(props.actions);
  });
});
