import {combineReducers } from 'redux';
import {settingsReducer} from './settings'


    export const rootReducer = combineReducers({
         settings: settingsReducer,
    })