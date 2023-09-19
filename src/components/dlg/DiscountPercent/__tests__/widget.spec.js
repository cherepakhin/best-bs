import React from 'react';
import { mount } from 'enzyme';
import DlgDiscountPercent from '../widget.js';
import { CONST_ACTION } from '../../../../constants.js';

let dlg;
let props;

beforeEach(() => {
  props = {
    doc: {
      n: 1
    },
    modalType: CONST_ACTION.DLG_DISCOUNT_PERCENT,
    actions:  {
      fnOk: function () {},

      fnCancel: function () {}
    }
  };

  dlg = mount(<DlgDiscountPercent {...props}/>);
  return {
    props,
    dlg
  };
});

describe('DlgDiscountPercent', () => {
  it('Нажатие Enter', () => {

    // expect(dlg.find('div').hasClass('static-modal')).toBe(true);
    let inputField = dlg.find('FormControl');
    let eventEnter = {
      key: 'Enter',
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };

    inputField.props().onKeyDown(eventEnter);
    expect(eventEnter.preventDefault.mock.calls.length).toBe(1);
    expect(eventEnter.stopPropagation.mock.calls.length).toBe(1);
  });

  it('Начальное значение в state percent=5', () => {
    expect(dlg.nodes[0].state.percent).toBe(5);
  });

  it('Установлено значение по умолчанию в поле ввода', () => {
    expect(dlg.nodes[0].inputPercent.value).toEqual('5');
  });
});
