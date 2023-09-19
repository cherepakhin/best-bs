import React from 'react';
import DlgDiscountPercent from '../widget.js';
import renderer from 'react-test-renderer';
import { CONST_ACTION } from '../../../../constants.js';

const props = {
  doc: {
    n: 1
  },
  modalType: CONST_ACTION.DLG_DISCOUNT_PERCENT
};

describe('DlgDiscountPercent snapshot', () => {
  it('Проверка title', ()=> {
    const dlg = renderer.create(<DlgDiscountPercent {...props}/>).toJSON();
    expect(dlg).toMatchSnapshot();
  });
});
