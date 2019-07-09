
import {combineReducers} from 'redux';
import {loginReducer} from './branches/loginBranch';

export const rootReducer = combineReducers({
    login: loginReducer,
});