import React from 'react';
import ComboGroupT from '../ComboGroupT.js';
import Buterbrod from '../../../util/Buterbrod.js';
import ToolBar from '../ToolBar.js';
import SearchString from '../SearchString.js';
import { shallow } from 'enzyme';

let props = {
  actions: {
    selectGroupT: jest.fn(),
    getByName: jest.fn()
  },
  onRest: true,
  groups: [
  { n: 1, name: 'Группа1' },
  { n: 2, name: 'Группа2' }
  ]
};

describe('ToolBar', ()=> {
  it('Передача свойств в ComboGroupT(каталог групп)', ()=> {
    let toolBar = shallow(<ToolBar {...props}/>);
    let comboGroupT = toolBar.find(ComboGroupT);
    expect(comboGroupT.props().actions.selectGroupT).toEqual(props.actions.selectGroupT);
    expect(comboGroupT.props().onRest).toBe(props.onRest);
    expect(comboGroupT.props().groups).toEqual(props.groups);
  });

  it('Передача свойств в SearchString(строка поиска)', ()=> {
    let toolBar = shallow(<ToolBar {...props}/>);
    let searchString = toolBar.find(SearchString);
    expect(searchString.props().actions.getByName).toEqual(props.actions.getByName);
    expect(searchString.props().onRest).toBe(props.onRest);
  });

  it('Определен Buterbrod', ()=> {
    let toolBar = shallow(<ToolBar {...props}/>);
    expect(toolBar.find(Buterbrod)).toBeDefined();
  });
});
