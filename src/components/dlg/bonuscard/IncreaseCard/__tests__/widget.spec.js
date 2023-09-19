import React from 'react';
import { mount } from 'enzyme';
import DlgIncreaseCard from '../widget.js';
import { CONST_ACTION } from '../../../../../constants.js';

let dlg;
let props;

beforeEach(() => {

  props = {
    doc: {
      n: 1
    },
    modalType: CONST_ACTION.DLG_INCREASE_BONUSCARD,
    actions: {
      fnOk: jest.fn(),
      cancel: jest.fn()
    }
  };
  dlg = mount(<DlgIncreaseCard {...props} />);

  return {
    props,
    dlg
  };
});

describe('DlgIncreaseCard', () => {
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
    let btnOk = dlg.find('#btnOk');

    expect(btnOk).toHaveLength(1);
    btnOk.simulate('click');
    expect(mockFnOk.mock.calls.length).toBe(1);
    expect(mockFnOk.mock.calls[0][0]).toEqual(props.doc);
    expect(mockFnOk.mock.calls[0][1]).toEqual('STROKE');
  });
});
