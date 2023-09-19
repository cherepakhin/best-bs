import React from 'react';
import { mount } from 'enzyme';
import DlgDiscountSumma from '../widget.js';
import { CONST_ACTION } from '../../../../constants.js';

let dlg;
let props;

beforeEach(() => {
  props = {
    doc: {
      n: 1
    },
    modalType: CONST_ACTION.DLG_DISCOUNT_SUMMA,
    actions:  {
      fnOk: function () {},

      fnCancel: function () {}
    }

  };
  dlg = mount(<DlgDiscountSumma {...props} />);
  return {
    props,
    dlg
  };
});

describe('DlgDiscountSumma', () => {
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

  it('Начальное значение в state summa=0', () => {
    expect(dlg.nodes[0].state.summa).toBe(0);
  });

  it('Установлено значение по умолчанию в поле ввода', () => {
    expect(dlg.nodes[0].inputSumma.value).toEqual('0');
  });
});
