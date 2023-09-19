import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import HeadInfo from '../HeadInfo.js';
import BtnBacket from '../BtnBacket.js';

let props = {
  doc: {
    summaOut: 100
  }
};

describe('HeadInfo', ()=> {
  it('Линки на docs, payments', ()=> {
    let headInfo = shallow(<HeadInfo {...props}/>);
    let links = headInfo.find(Link);
    expect(links.length).toBe(3);
    expect(links.at(0).props().to).toBe('/');
    expect(links.at(1).props().to).toBe('/docs');
    expect(links.at(2).props().to).toBe('/payments');
  });

  it('Проверка кнопки корзины', ()=> {
    let headInfo = shallow(<HeadInfo {...props}/>);
    let btn = headInfo.find(BtnBacket);
    expect(btn).toBeDefined();
    expect(btn.props().summa).toBe(props.doc.summaOut);
  });

});
