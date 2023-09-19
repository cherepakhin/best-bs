import { CONST_ACTION } from '../constants';

export const progressShow = function () {
  return {
    type: CONST_ACTION.PROGRESS_SHOW,
    payload: ''
  };
};

export const progressHide = function () {
  return {
    type: CONST_ACTION.PROGRESS_HIDE,
    payload: ''
  };
};

