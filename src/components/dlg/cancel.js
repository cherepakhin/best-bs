import { CONST_ACTION } from '../../constants.js';

const cancel = function () {
  return (dispatch) => {
    dispatch({
      type: CONST_ACTION.CLOSE_DIALOG
    });
  };
};

export default cancel;
