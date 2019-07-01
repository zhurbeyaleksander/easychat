import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './conteiners/routers/routers';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
<HashRouter>
 {routes}
</HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
