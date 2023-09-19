import React from 'react';
import { shallow } from 'enzyme';
import ComboSortPrice from '../ComboSortPrice.js';

let props = {
  resort: jest.fn()
};

describe('ComboSortPrice', ()=> {
  it('Компоновка (render)', ()=> {
    let combo = shallow(<ComboSortPrice {...props}/>);
    expect(combo.find('.form-control')).toHaveLength(1);
    expect(combo.find('.form-control > option')).toHaveLength(3);
    expect(combo.find('.form-control > option').at(0).text()).toBe('цене(по возрастанию)');
    expect(combo.find('.form-control > option').at(1).text()).toBe('цене(по убыванию)');
    expect(combo.find('.form-control > option').at(2).text()).toBe('по названию');
  });

  it('Выбор сортировки по цене(по возрастанию)', ()=> {
    let combo = shallow(<ComboSortPrice {...props}/>);
    combo.find('select').simulate('change', { target: { value: 'цене(по возрастанию)' } });
    expect(props.resort.mock.calls.length).toBe(1);
    expect(props.resort.mock.calls[0][0]).toBe('цене(по возрастанию)');
  });

  it('Выбор сортировки по цене(по убыванию)', ()=> {
    props.resort = jest.fn();
    let combo = shallow(<ComboSortPrice {...props}/>);
    combo.find('select').simulate('change', { target: { value: 'цене(по убыванию)' } });
    expect(props.resort.mock.calls.length).toBe(1);
    expect(props.resort.mock.calls[0][0]).toBe('цене(по убыванию)');
  });
});
