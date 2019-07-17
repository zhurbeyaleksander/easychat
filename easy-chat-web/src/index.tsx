import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createHashHistory } from 'history';
import configureStore from './configureStore';
import Main from './main';


const history = createHashHistory();
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
<Main store={store} history={history}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
