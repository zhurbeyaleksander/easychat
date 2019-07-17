import * as React from 'react';
import {Route, Switch } from 'react-router-dom';

import { App } from './conteiners/App/App';
import { Registration } from './conteiners/Registration/Registration';
import { HeroesPage } from './pages/heroes';

const Routes: React.SFC = () => (
    <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/registration" component={Registration} />
        <Route path="/heroes" component={HeroesPage} />
    </Switch>
)

export default Routes