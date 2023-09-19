import { progressShow, progressHide } from '../ProgressActions';
import { CONST_ACTION } from '../../constants';

describe('ProgressActions', () => {
  it('show progress', () => {
    const expectedAction = {
      type: CONST_ACTION.PROGRESS_SHOW,
      payload: ''
    };
    expect(progressShow()).toEqual(expectedAction);
  });
  it('hide progress', () => {
    const expectedAction = {
      type: CONST_ACTION.PROGRESS_HIDE,
      payload: ''
    };
    expect(progressHide()).toEqual(expectedAction);
  });
});

