import React from 'react';
import { shallow } from 'enzyme';
import { Sale } from '../Sale.js';
import SaleContent from '../../components/sale/SaleContent.js';

let props = {
  actions: {
    doc: {
      addDocItem: jest.fn()
    },
    prices: {
      getByFilter: jest.fn(),
      getByName: jest.fn(),
      queryFeature: jest.fn(),
      resort: jest.fn(),
      setOnRest: jest.fn()
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

describe('Sale Content', () => {
  it('Проверка передачи параметров', ()=> {
    let sale = shallow(<Sale {...props}/>);
    let saleContent = sale.find(SaleContent);

    expect(saleContent.props().actions).toEqual(props.actions);
    expect(saleContent.props().selectedGroupT).toEqual(props.sale.selectedGroupT);
    expect(saleContent.props().prices).toEqual(props.sale.prices);
    expect(saleContent.props().doc).toEqual(props.doc);
    expect(saleContent.props().onRest).toEqual(props.sale.onRest);
    expect(saleContent.props().queryFeature).toEqual(props.sale.queryFeature);
  });
});
