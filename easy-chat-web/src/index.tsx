import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './conteiners/routers/routers';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createHashHistory } from 'history';
import configureStore from './configureStore';
import { ConnectedRouter } from 'connected-react-router';

const history = createHashHistory();
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
<Provider store={store}>
<ConnectedRouter history={history}>
<HashRouter>
 {routes}
</HashRouter>
</ConnectedRouter> 
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
