import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

import BtnBacket from '../BtnBacket.js';

let props = {
  summa: 100
};

describe('BtnBacket', ()=> {
  it('Компоновка', ()=> {
    let btn = shallow(<BtnBacket {...props}/>);
    let link = btn.find(Link);
    expect(link.props().to).toBe('/doc');
    expect(link.find('strong').text()).toBe(' КОРЗИНА ' + props.summa + ' р.');
  });
});
