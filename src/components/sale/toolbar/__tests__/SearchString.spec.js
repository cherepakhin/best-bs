import React from 'react';
import { mount } from 'enzyme';
import SearchString from '../SearchString.js';

let props = {
  actions: {
    getByName: jest.fn()
  },
  onRest: true
};

describe('SearchString', ()=> {
  it('Конструктор', ()=> {
    let searchString = new SearchString(props);
    expect(searchString.searchName).toBe('');
  });

  it('Ввод в строку поиска', ()=> {
    let searchString = mount(<SearchString {...props}/>);
    searchString.find('input').simulate('change',  { target: { value: 'test' } });
    searchString.find('input').simulate('keyDown',  { key: 'Enter' });
    expect(props.actions.getByName.mock.calls.length).toBe(1);
    expect(props.actions.getByName.mock.calls[0][0]).toBe('test');
    expect(props.actions.getByName.mock.calls[0][1]).toBe(props.onRest);
  });

});

