import { CONST_ACTION } from '../constants';

let initialState = {
  ddate: new Date().toISOString().slice(0, 10),
  docs: []
};

const docsReducer = function (state = initialState, action) {
  switch (action.type) {
    case CONST_ACTION.SELECT_DATE_DOC:
      return { ...state,
          ddate: action.payload.ddate,
          docs: action.payload.docs
        };
    default:
      return state;
  }
};

export default docsReducer;
