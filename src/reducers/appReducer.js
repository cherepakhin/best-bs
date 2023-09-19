import { CONST_ACTION } from '../constants';

let initialState = {
  progress: false,
  groups: [],
  typePayments: [],
  discounts: [],
  reports: [],
  company: {}
};

const appReducer = function (state = initialState, action) {
  switch (action.type) {
  case CONST_ACTION.PROGRESS_SHOW:
    return { ...state, progress: true };
  case CONST_ACTION.PROGRESS_HIDE:
    return { ...state, progress: false };
  case CONST_ACTION.INIT_VAR:
    return {
      ...state,
      groups: action.payload.groups,
      typePayments: action.payload.typePayments,
      discounts: action.payload.discounts,
      reports: action.payload.reports,
      company: action.payload.company
    };
  default:
    return state;
}
};

export default appReducer;
