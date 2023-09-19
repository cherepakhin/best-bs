import docReducer from '../docReducer';
import { CONST_ACTION, formatDate } from '../../constants';

let defaultState = {};

beforeEach(() => {
  // console.log('init');
  defaultState = {
    n: 0,
    ddate: new Date(),
    summaOut: 0,
    docItems: [],
    payments: [],
    discounts: [],
    bonus: 0
  };
});

describe('docReducer', () => {
  test('Начальная установка(state=undefined)', () => {
    let newState = docReducer(undefined, {});
    defaultState = { ...defaultState,
      ddate: newState.ddate
    };
    expect(newState).toEqual(defaultState);
  });

  test('Установка текущего док-та (CONST_ACTION.SET_DOC)', () => {
    let docItems = [{
      n: 1
    }];
    let expectedState = { ...defaultState,
      docItems: docItems
    };
    let newState = docReducer(defaultState, {
      type: CONST_ACTION.SET_DOC,
      payload: expectedState
    });
    expect(newState).toEqual(expectedState);
  });

  test('Установка текущего док-та с дата - строка (CONST_ACTION.SET_DOC)', () => {
    let newDoc = { ...defaultState };
    newDoc.ddate = '2012-01-26';

    let newState = docReducer(defaultState, {
      type: CONST_ACTION.SET_DOC,
      payload: newDoc
    });
    expect(formatDate(newState.ddate)).toBe('26.01.2012');
  });

  test('Установка текущего док-та payments=undefined (CONST_ACTION.SET_DOC)', () => {
    let newDoc = { ...defaultState };
    newDoc.payments = undefined;

    let newState = docReducer(defaultState, {
      type: CONST_ACTION.SET_DOC,
      payload: newDoc
    });
    expect(newState.payments).toEqual([]);
  });

  test('Установка текущего док-та discounts=undefined (CONST_ACTION.SET_DOC)', () => {
    let newDoc = { ...defaultState };
    newDoc.discounts = undefined;

    let newState = docReducer(defaultState, {
      type: CONST_ACTION.SET_DOC,
      payload: newDoc
    });
    expect(newState.discounts).toEqual([]);
  });

  test('Установка текущего док-та bonus=undefined (CONST_ACTION.SET_DOC)', () => {
    let newDoc = { ...defaultState };
    newDoc.bonus = undefined;

    let newState = docReducer(defaultState, {
      type: CONST_ACTION.SET_DOC,
      payload: newDoc
    });
    expect(newState.bonus).toBe(0);
  });

  test('Создание платежа (CONST_ACTION.CREATE_PAYMENT)', () => {
    let payment = {
      n: 1
    };
    let payments = [payment];
    let expectedState = { ...defaultState,
      payments
    };
    let newState = docReducer(defaultState, {
      type: CONST_ACTION.CREATE_PAYMENT,
      payload: {
        payment
      }
    });
    expect(newState).toEqual(expectedState);
  });

  test('Удаление платежа (CONST_ACTION.DELETE_PAYMENT)', () => {
    let payment = {
      summa: 111,
      typePayment: 'Нал'
    };
    let expectedState = { ...defaultState,
      payments: []
    };

    defaultState.payments.push(payment);
    let newState = docReducer(defaultState, {
      type: CONST_ACTION.DELETE_PAYMENT,
      payload: payment
    });
    expect(newState).toEqual(expectedState);
  });
});
