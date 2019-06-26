import * as React from 'react';
import {Route, Switch} from  'react-router-dom';

import { App } from '../App/App';
import { Registration } from '../Registration/Registration'

export default (
    <Switch>
    <Route exact={true} path="/" component={App} />
    <Route path="/registration" component={Registration} />
    </Switch>
);