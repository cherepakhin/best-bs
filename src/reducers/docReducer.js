import { CONST_ACTION } from '../constants';

let initialState = {
  n: 0,
  ddate: new Date().toISOString().slice(0, 10),
  summaOut: 0,
  docItems: [],
  payments: [],
  discounts: [],
  bonus: 0
};

const docReducer = function (state = initialState, action) {
  switch (action.type) {

  case CONST_ACTION.SET_DOC: {
    let doc = action.payload;

    if (doc.payments == undefined) {
      doc.payments = [];
    }

    if (doc.discounts == undefined) {
      doc.discounts = [];
    }

    if (doc.bonus == undefined) {
      doc.bonus = 0;
    }

    doc.message = '';
    doc.title = undefined;
    return Object.assign(...state, doc);
  }

  case CONST_ACTION.CREATE_PAYMENT: {
    let doc = { ...state };
    doc.payments.push(action.payload.payment);
    return doc;
  }

  case CONST_ACTION.DELETE_PAYMENT: {
    let payment = action.payload;
    let doc = { ...state };

    let payments = doc.payments.filter(function (p) {
      return !(p.summa === payment.summa && p.typePayment === payment.typePayment);
    });

    doc.payments = payments;
    return doc;
  }

  default:
    return state;
}

};

export default docReducer;
