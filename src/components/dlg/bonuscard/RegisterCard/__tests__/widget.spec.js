import React from 'react';
import { mount } from 'enzyme';
import DlgRegisterCard from '../widget.js';
import { CONST_ACTION } from '../../../../../constants.js';

let dlg;
let props;

beforeEach(() => {

  props = {
    doc: {
      n: 1
    },
    modalType: CONST_ACTION.DLG_REGISTER_BONUSCARD,
    actions: {
      fnOk: jest.fn(),
      fnCancel: jest.fn()
    }
  };
  dlg = mount(<DlgRegisterCard {...props} />);

  return {
    props,
    dlg
  };
});

describe('DlgRegisterCard', () => {
  it('Нажатие Enter', () => {

    // expect(dlg.find('div').hasClass('static-modal')).toBe(true);
    let inputStroke = dlg.find('#stroke');
    let eventEnter = {
      key: 'Enter',
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };

    inputStroke.props().onKeyDown(eventEnter);
    expect(eventEnter.preventDefault.mock.calls.length).toBe(1);
    expect(eventEnter.stopPropagation.mock.calls.length).toBe(1);
  });

  it('Установлено значение по умолчанию в поле ввода имени покупателя', () => {
    expect(dlg.nodes[0].inputName.value).toEqual('');
  });

  it('Установлено значение по умолчанию в поле ввода телефона покупателя', () => {
    expect(dlg.nodes[0].inputPhone.value).toEqual('');
  });

  it('Установлено значение по умолчанию в поле ввода штрихкода', () => {
    expect(dlg.nodes[0].inputStroke.value).toEqual('');
  });

  it('Установлено какое-то значение в поле ввода штрихкода', () => {
    dlg.nodes[0].inputStroke.value = '12345';
    expect(dlg.nodes[0].inputStroke.value).toEqual('12345');
  });

  it('Передача параметров в fnOk', () => {
    let mockFnOk = jest.fn();
    dlg.node.props.actions.fnOk = mockFnOk;
    dlg.node.inputStroke.value = 'STROKE';
    dlg.node.inputName.value = 'NAME';
    dlg.node.inputPhone.value = 'PHONE';
    let btnOk = dlg.find('#btnOk');

    expect(btnOk).toHaveLength(1);
    btnOk.simulate('click');
    expect(mockFnOk.mock.calls.length).toBe(1);
    expect(mockFnOk.mock.calls[0][0]).toEqual(props.doc);
    expect(mockFnOk.mock.calls[0][1]).toEqual({ name: 'NAME', phone: 'PHONE' });
    expect(mockFnOk.mock.calls[0][2]).toEqual('STROKE');
  });
});
