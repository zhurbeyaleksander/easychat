import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './conteiners/routers/routers';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
 {routes}
</BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
