import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import  createSagaMiddleware  from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { ApplicationState, createRootReducer} from './store'

export default function configureStore(
    history: History,
    initialState: ApplicationState
  ): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
      createRootReducer(history),
      initialState,
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )
    
    return store
  }