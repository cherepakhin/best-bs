//import { browserHistory } from 'react-router'

import {ROUTING} from '../constants'

export const redirect = store => next => action => { //eslint-disable-line no-unused-vars
    if (action.type === ROUTING) {
//        console.log('action');
//        console.log(JSON.stringify(action));
//        browserHistory[action.payload.method](action.payload.nextUrl)
    }

    return next(action)
};
