import React from 'react';
import { shallow } from 'enzyme';
import { Sale } from '../Sale.js';
import ToolBar from '../../components/sale/toolbar/ToolBar.js';
import { intersection } from 'lodash';

let props = {
  actions: {
    doc: {
      addDocItem: jest.fn()
    },
    prices: {
      getByFilter: jest.fn(),
      getByName: jest.fn(),
      setOnRest: jest.fn(),
      resort: jest.fn()
    },
    groupt: {
      selectGroupT: jest.fn(),
      getAllPricesByGroupT: jest.fn()
    }
  },
  app: {
    groups: [{
      n: 1,
      name: 'Группа1'
    }, {
      n: 2,
      name: 'Группа2'
    }]
  },
  sale: {
    selectedGroupT: {},
    onRest: true,
    prices: [],
    queryFeature: []
  },
  doc: {}
};

describe('Sale Toolbar', () => {
  it('Проверка передачи actions.prices в Toolbar', ()=> {
    let sale = shallow(<Sale {...props}/>);
    let toolbar = sale.find(ToolBar);

    let priceActions = intersection(
      Object.keys(toolbar.props().actions),
      Object.keys(props.actions.prices)
    );
    expect(Object.keys(props.actions.prices)).toEqual(priceActions);
  });

  it('Проверка передачи actions.groupt в Toolbar', ()=> {
    let sale = shallow(<Sale {...props}/>);
    let toolbar = sale.find(ToolBar);

    // Проверка передачи actions.groupt
    let grouptActions = intersection(
      Object.keys(toolbar.props().actions),
      Object.keys(props.actions.groupt)
    );
    expect(Object.keys(props.actions.groupt)).toEqual(grouptActions);
  });

  it('Проверка передачи групп и признака onRest в Toolbar', ()=> {
    let sale = shallow(<Sale {...props}/>);
    let toolbar = sale.find(ToolBar);

    expect(toolbar.props().groups).toEqual(props.app.groups);
    expect(toolbar.props().onRest).toEqual(props.sale.onRest);
  });
});
