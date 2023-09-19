import React from 'react';
import DlgDiscountByGroupT from '../widget.js';
import renderer from 'react-test-renderer';
import { CONST_ACTION } from '../../../../constants.js';

const props = {
  doc: {
    n: 1
  },
  modalType: CONST_ACTION.DLG_DISCOUNT_BY_GROUPT
};

describe('DlgDiscountByGroupT snapshot', () => {
  it('Проверка title', ()=> {
    const dlg = renderer.create(<DlgDiscountByGroupT {...props}/>).toJSON();
    expect(dlg).toMatchSnapshot();
  });
});
