import React from 'react';
import { mount } from 'enzyme';
import DlgPayment from '../widget.js';
import { CONST_ACTION } from '../../../../constants.js';

let dlg;
let props;

beforeEach(() => {
  props = {
    doc: {
      n: 1,
      summaOut: 100
    },
    modalType: CONST_ACTION.DLG_PAYMENT,
    typePayment: {
      n: 0,
      name: 'Наличные'
    },
    actions: {
      fnOk: jest.fn(),
      fnCancel: jest.fn()
    }
  };
  dlg = mount(<DlgPayment {...props} />);
  return {
    props,
    dlg
  };
});

describe('DlgPayment', () => {
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
    expect(dlg.nodes[0].inputSumma.value * 1).toEqual(props.doc.summaOut);
  });

  it('Передача параметров в fnOk', () => {
    let mockFnOk = jest.fn();
    dlg.node.props.actions.fnOk = mockFnOk;
    dlg.node.inputSumma.value = 200;
    let expectPayment = {
      typePayment: 'Наличные',
      summa: '200'
    };
    let btnOk = dlg.find('#btnOk');

    expect(btnOk).toHaveLength(1);
    btnOk.simulate('click');
    expect(mockFnOk.mock.calls.length).toBe(1);
    expect(mockFnOk.mock.calls[0][0]).toEqual(props.doc);
    expect(mockFnOk.mock.calls[0][1]).toEqual(expectPayment);
  });
});
