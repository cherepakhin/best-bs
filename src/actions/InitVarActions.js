import { CONST_ACTION, INITVAR } from '../constants.js';

import fetch from 'isomorphic-fetch';

const initVar = function () {

  return dispatch => {
      dispatch({
          type: CONST_ACTION.PROGRESS_SHOW
        });
      return fetch(INITVAR.URL_SERVER + '/var/initvar/', {
          method: 'GET',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (json) {
          dispatch({
              type: CONST_ACTION.INIT_VAR,
              payload: json
            });
          dispatch({
              type: CONST_ACTION.PROGRESS_HIDE
            });
        }).catch(function (ex) {
          console.log('Failed initvar /var/initvar/', ex);
        });

    };
};

export default initVar;
