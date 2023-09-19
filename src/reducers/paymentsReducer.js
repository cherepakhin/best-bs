import { CONST_ACTION } from '../constants';
import { remove } from 'lodash';

let initialState = {
  ddate: new Date().toISOString().slice(0, 10),
  payments: []
};

const paymentReducer = function (state = initialState, action) {
  switch (action.type) {
  case CONST_ACTION.SELECT_DATE_PAYMENT: {
    let ddate = action.payload.ddate;
    if (ddate == undefined) {
      ddate = state.ddate;
    }

    return {
      ...state,
      payments: action.payload.payments,
      ddate: ddate
    };
  }

  case CONST_ACTION.DELETE_PAYMENT: {
    let payment = action.payload;
    let payments = state.payments;
    let removedPayments = remove(payments, { n: payment.n });
    if (removedPayments.length > 0) {
      return {
        ...state,
        payments: payments
      };
    }

    return { ...state };
  }

  default:
    return state;
}};

export default paymentReducer;
