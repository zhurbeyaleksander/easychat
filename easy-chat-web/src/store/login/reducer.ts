import { Reducer } from 'redux';
import { LoginState, LoginActionTypes } from './types';

export const initialState: LoginState = {
    login: '',
    password: '',
    token: '',
    isLogin: false,
}

const reducer: Reducer<LoginState> = (state = initialState, action) => {
    switch(action.type) {
        case LoginActionTypes.SET_LOGIN: {
            return {...state, isLogin: true}
        }
        default: {
            return state
        }
    }
}

export {reducer as loginReducer}