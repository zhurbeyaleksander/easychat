import {combineReducers} from 'redux';
import {loginReducer} from './branches/loginBranch';

const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;