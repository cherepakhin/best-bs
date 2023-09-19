import React from 'react';
import { shallow } from 'enzyme';
import SaleContent from '../SaleContent.js';
import SortPricesPanel from '../SortPricesPanel.js';
import Filter from '../Filter.js';
import Prices from '../price/Prices.js';

let props = {
  actions: {
    doc: {
      addDocItem: jest.fn()
    },
    prices: {
      getByFilter: jest.fn(),
      setOnRest: jest.fn(),
      resort: jest.fn()
    }
  },
  doc: {},
  selectedGroupT: {},
  onRest: true,
  prices: [],
  queryFeature: []
};

describe('SaleContent', ()=> {
  it('Передача параметров в Filter', ()=> {
    let saleContent = shallow(<SaleContent {...props}/>);
    let filter = saleContent.find(Filter);
    expect(filter.props().groupT).toEqual(props.selectedGroupT);
    expect(filter.props().onRest).toEqual(props.onRest);
    expect(filter.props().actions).toEqual(props.actions.prices);
  });

  it('Передача параметров в SortPricesPanel', ()=> {
    let saleContent = shallow(<SaleContent {...props}/>);
    let sortPricesPanel = saleContent.find(SortPricesPanel);
    expect(sortPricesPanel.props().actions).toEqual(props.actions);
  });

  it('Передача параметров в Prices', ()=> {
    let saleContent = shallow(<SaleContent {...props}/>);
    let prices = saleContent.find(Prices);
    expect(prices.props().actions).toEqual(props.actions.doc);
    expect(prices.props().prices).toEqual(props.prices);
    expect(prices.props().doc).toEqual(props.doc);
  });
});
