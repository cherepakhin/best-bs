import { CONST_ACTION } from '../../../constants.js';
import mapDlg from '../mapDlg.js';

describe('Test mapDlg', () => {
  it('Проверка ключей', () => {
          let keys = Array.from(mapDlg.keys());
          expect(keys).toEqual([
            CONST_ACTION.DLG_MESSAGE,
            CONST_ACTION.DLG_DISCOUNT_PERCENT,
            CONST_ACTION.DLG_DISCOUNT_BY_GROUPT,
            CONST_ACTION.DLG_DISCOUNT_PERCENT_ON_PRODUCT,
            CONST_ACTION.DLG_DISCOUNT_SUMMA,
            CONST_ACTION.DLG_PAYMENT,
            CONST_ACTION.DLG_REGISTER_BONUSCARD,
            CONST_ACTION.DLG_INCREASE_BONUSCARD,
            CONST_ACTION.DLG_PAY_BONUSCARD
            ]);
        });

  it('Проверка DLG_DISCOUNT_PERCENT', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_DISCOUNT_PERCENT);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_MESSAGE', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_MESSAGE);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_DISCOUNT_BY_GROUPT', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_DISCOUNT_BY_GROUPT);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_DISCOUNT_PERCENT_ON_PRODUCT', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_DISCOUNT_PERCENT_ON_PRODUCT);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_DISCOUNT_SUMMA', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_DISCOUNT_SUMMA);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_PAYMENT', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_PAYMENT);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_REGISTER_BONUSCARD', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_REGISTER_BONUSCARD);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_INCREASE_BONUSCARD', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_INCREASE_BONUSCARD);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });

  it('Проверка DLG_PAY_BONUSCARD', () => {
    let dlg = mapDlg.get(CONST_ACTION.DLG_PAY_BONUSCARD);
    expect(dlg).toBeDefined();
    expect(dlg.widget).toBeDefined();
  });
});
