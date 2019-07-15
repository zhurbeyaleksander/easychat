import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { loginReducer } from './login/reducer';
import { LoginState } from './login/types';

export interface ApplicationState {
  login: LoginState
  router: RouterState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const createRootReducer = (history: History) =>
  combineReducers({
    login: loginReducer,
    router: connectRouter(history)
  })
