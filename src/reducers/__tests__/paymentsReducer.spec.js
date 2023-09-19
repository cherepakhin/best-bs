import { CONST_ACTION } from '../../constants';
import paymentsReducer from '../paymentsReducer.js';

let date = new Date().toISOString().slice(0, 10);

let payment1 = {
  n: 1
};

let payment2 = {
  n: 2
};

let payment3 = {
  n: 3
};

describe('paymentsReduser', ()=> {
  it('default init', () => {
    let actualState = paymentsReducer(undefined, {});
    expect(actualState.payments).toEqual([]);
  });

  it('Выбор платежей на дату. CONST_ACTION.SELECT_DATE_PAYMENT', ()=> {
    let actualState = paymentsReducer({}, {
      type: CONST_ACTION.SELECT_DATE_PAYMENT,
      payload: {
        ddate: date,
        payments: [payment1, payment2]
      }
    });
    expect(actualState.payments).toEqual([payment1, payment2]);
    expect(actualState.ddate).toBe(date);
  });

  it('Удаление платежа.Платеж есть в списке. CONST_ACTION.DELETE_PAYMENT', ()=> {
    let actualState = paymentsReducer({
        ddate: date,
        payments: [payment1, payment2]
      }, {
      type: CONST_ACTION.DELETE_PAYMENT,
      payload: payment1
    });
    // console.log(actualState);
    expect(actualState.payments).toEqual([payment2]);
    expect(actualState.ddate).toBe(date);
  });

  it('Удаление платежа.Платежа НЕТ в списке. CONST_ACTION.DELETE_PAYMENT', ()=> {
    let actualState = paymentsReducer({
        ddate: date,
        payments: [payment1, payment2]
      }, {
      type: CONST_ACTION.DELETE_PAYMENT,
      payload: payment3
    });
    // console.log(actualState);
    expect(actualState.payments).toEqual([payment1, payment2]);
    expect(actualState.ddate).toBe(date);
  });
});
