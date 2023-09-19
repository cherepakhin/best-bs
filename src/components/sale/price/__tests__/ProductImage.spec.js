import React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'react-bootstrap';

import ProductImage from '../ProductImage.js';

let props = {
  product: {
    n: 0,
    name: '',
    thumb: ''
  }
};

describe('ProductImage', ()=> {
  it('Компоновка', ()=> {
    let prouctImage = shallow(<ProductImage {...props}/>);
    let image = prouctImage.find(Image);
    expect(image.props().src).toBe('/public' + props.product.thumb);
  });
});
