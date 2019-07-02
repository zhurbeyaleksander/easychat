import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './conteiners/routers/routers';
import {HashRouter} from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
<Provider store={store}>
<HashRouter>
 {routes}
</HashRouter>
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
