import React from 'react';
import { shallow } from 'enzyme';

import ProductName from '../ProductName.js';

let props = {
  product: {
    n: 0,
    name: 'Товар',
    features: [
      { name: 'Feature1', fval: 'Val1' },
      { name: 'Feature2', fval: 'Val2' }
    ]
  }
};

describe('ProductName', ()=> {
  it('Название товара и н.номер', ()=> {
    let productName = shallow(<ProductName {...props}/>);
    expect(productName.find('table > tr > td > strong').text()).toBe(props.product.name);
    expect(productName.find('table > tr > td > small').text() * 1).toBe(props.product.n);
  });

  it('Характеристики', ()=> {
    let productName = shallow(<ProductName {...props}/>);
    let featureElements = productName.find('dl > div > dt');
    expect(featureElements.children().length).toBe(2);
    expect(featureElements.at(0).text()).toBe('Feature1');
    expect(featureElements.at(1).text()).toBe('Feature2');

    featureElements = productName.find('dl > div > dd');
    expect(featureElements.children().length).toBe(2);
    expect(featureElements.at(0).text()).toBe('Val1');
    expect(featureElements.at(1).text()).toBe('Val2');
  });
});
