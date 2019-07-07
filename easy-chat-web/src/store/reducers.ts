import * as Redux from 'redux';
import {combineReducers} from 'redux';
import {loginReducer} from './branches/loginBranch';
import {IStore} from './IStore';

export const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
    login: loginReducer,
});

export default rootReducer;