import appReducer from '../appReducer';
import { CONST_ACTION } from '../../constants';

let defaultState = {
  progress: false,
  groups: [],
  typePayments: [],
  discounts: [],
  reports: [],
  company: {}
};

describe('appReducer', () => {

  it('default init', () => {
    expect(
    appReducer(undefined, {})
    ).toEqual(defaultState);
  });

  it('Progress show', () => {
    expect(
    appReducer(defaultState, {
      type: CONST_ACTION.PROGRESS_SHOW
    })
    ).toEqual({
      progress: true,
      groups: [],
      typePayments: [],
      discounts: [],
      reports: [],
      company: {}
    });
  });

  it('Progress hide', () => {
    expect(
    appReducer(defaultState, {
      type: CONST_ACTION.PROGRESS_HIDE
    })
    ).toEqual({
      progress: false,
      groups: [],
      typePayments: [],
      discounts: [],
      reports: [],
      company: {}
    });
  });

  it('Init var', () => {
    expect(
    appReducer(defaultState, {
      type: CONST_ACTION.INIT_VAR,
      payload: {
        groups: ['groups'],
        typePayments: ['typePayments'],
        discounts: ['discounts'],
        reports: ['reports'],
        company: {
          name: 'Company'
        }
      }
    })
    ).toEqual({
      progress: false,
      groups: ['groups'],
      typePayments: ['typePayments'],
      discounts: ['discounts'],
      reports: ['reports'],
      company: {
        name: 'Company'
      }
    });
  });
});
