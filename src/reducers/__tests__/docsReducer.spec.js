import docsReducer from '../docsReducer.js';
import { CONST_ACTION, formatDate } from '../../constants';

let defaultState = {
  ddate: new Date().toISOString().slice(0, 10),
  docs: []
};

describe('docsReducer', () => {

  it('default init', () => {
    let newState = docsReducer(undefined, {});
    expect(newState.docs).toEqual([]);
    expect(formatDate(newState.ddate)).toEqual(formatDate(new Date().toISOString().slice(0, 10)));
  });

  it('Выбор даты', () => {
    let ddate = new Date().toISOString().slice(0, 10);
    let action = {
      type: CONST_ACTION.SELECT_DATE_DOC,
      payload: {
        ddate: ddate,
        docs: [
          { n: 1, ddate: ddate },
          { n: 2, ddate: ddate }
        ]
      }
    };
    let newState = docsReducer(defaultState, action);
    expect(newState.docs).toEqual(action.payload.docs);
    expect(newState.ddate).toEqual(ddate);
  });

});

