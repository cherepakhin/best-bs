import React from 'react';
import { shallow, mount } from 'enzyme';

import BtnAddToDoc from '../BthAddToDoc.js';

let doc = {
  n: 1,
  docItems: [
  {
    product: {
      n: 1,
      name: 'Tovar1'
    }
  }
  ]
};

let price = {
  product: {
    n: 2
  }
};

describe('BtnAddToDoc', ()=> {
  it('Назначение props. Товар НЕ в корзине', ()=> {
    let props = {
      doc: doc,
      price: price,
      actions: {
        addDocItem: jest.fn()
      }
    };
    let btn = mount(<BtnAddToDoc {...props}/>);
    let wrapper = btn.find('#btnAddToDoc');
    expect(wrapper.text()).toBe(' В КОРЗИНУ');

    // console.log(btn.find('#linkDoc').component);
    expect(btn.find('#linkDoc').component).toBeNull();

    // expect(btn).toMatchSnapshot();
  });

  it('Click на кнопке. Добавить товар в корзину. Товар НЕ в корзине', ()=> {
    let props = {
      doc: doc,
      price: price,
      actions: {
        addDocItem: jest.fn()
      }
    };
    let btn = mount(<BtnAddToDoc {...props}/>);
    let wrapper = btn.find('#btnAddToDoc');
    wrapper.simulate('click');
    expect(props.actions.addDocItem.mock.calls.length).toBe(1);
    expect(props.actions.addDocItem.mock.calls[0][0]).toEqual(props.doc);
    expect(props.actions.addDocItem.mock.calls[0][1]).toEqual(props.price);
  });

  it('Назначение props. Товар В корзине', ()=> {
    let props = {
      doc: doc,
      price: {
        product: {
          n: 1
        }
      },
      actions: {
        addDocItem: jest.fn()
      }
    };
    let btn = shallow(<BtnAddToDoc {...props}/>);
    let wrapper = btn.find('#btnAddToDoc');
    expect(wrapper.text()).toBe(' КУПЛЕНО');
    wrapper.simulate('click');

    // expect(btn).toMatchSnapshot();
    expect(btn.find('#linkDoc').node.type.displayName).toBe('Link');
  });

  it('Click на кнопке. Добавить товар в корзину. Товар В корзине', ()=> {
    let props = {
      doc: doc,
      price: {
        product: {
          n: 1
        }
      },
      actions: {
        addDocItem: jest.fn()
      }
    };
    let btn = shallow(<BtnAddToDoc {...props}/>);
    let wrapper = btn.find('#btnAddToDoc');
    wrapper.simulate('click');
    expect(props.actions.addDocItem.mock.calls.length).toBe(0);
  });
});
