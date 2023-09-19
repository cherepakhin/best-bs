import React from 'react';
import { shallow } from 'enzyme';
import SortPricesPanel from '../SortPricesPanel.js';
import ComboSortPrice from '../ComboSortPrice.js';
import CheckBoxOnRest from '../CheckBoxOnRest.js';

let props = {
  actions: {
    prices: {
      resort: jest.fn(),
      setOnRest: jest.fn()
    }
  }
};

describe('SortPricesPanel', ()=> {
  it('Передача свойств в ComboSortPrice(выбор сортировки товаров)', ()=> {
    let toolBar = shallow(<SortPricesPanel {...props}/>);
    let comboSortPrice = toolBar.find(ComboSortPrice);
    expect(comboSortPrice.props().resort).toEqual(props.actions.prices.resort);
  });

  it('Передача свойств в CheckBoxOnRest(крыжик на остатках)', ()=> {
    let toolBar = shallow(<SortPricesPanel {...props}/>);
    let checkBoxOnRest = toolBar.find(CheckBoxOnRest);
    expect(checkBoxOnRest.props().setOnRest).toEqual(props.actions.prices.setOnRest);
  });
});
