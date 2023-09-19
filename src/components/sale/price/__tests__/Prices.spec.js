import React from 'react';
import Prices from '../Prices.js';
import PricePanel from '../PricePanel.js';
import { shallow } from 'enzyme';

let props = {
    actions: {
      addDocItem: jest.fn()
    },
    doc: {},
    prices: [
      { n: 10 },
      { n: 20 }
    ]
  };

describe('Prices', ()=> {
  it('Компоновка', ()=> {
    let prices = shallow(<Prices {...props}/>);
    let panels = prices.find(PricePanel);
    expect(panels.length).toBe(2);

    let panel0 = panels.at(0);
    expect(panel0.props().doc).toEqual(props.doc);
    expect(panel0.props().price).toEqual(props.prices[0]);
    expect(panel0.props().actions).toEqual(props.actions);
    expect(panel0.props().index).toBe(0);

    let panel1 = panels.at(1);
    expect(panel1.props().doc).toEqual(props.doc);
    expect(panel1.props().price).toEqual(props.prices[1]);
    expect(panel1.props().actions).toEqual(props.actions);
    expect(panel1.props().index).toBe(1);
  });
});
