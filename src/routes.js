import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Sale from './containers/Sale';
import Doc from './containers/Doc';
import Docs from './containers/Docs';
import Payments from './containers/Payments';
import PageNotFound from './components/PageNotFound';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Sale}/>
            <Route path='sale' component={Sale}/>
            <Route path='doc' component={Doc}/>
            <Route path='docs' component={Docs}/>
            <Route path='payments' component={Payments}/>
        </Route>
        <Route path='*' component={PageNotFound}/>
    </div>
);
