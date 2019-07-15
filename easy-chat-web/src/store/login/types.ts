export interface Login {
    login: string,
    password: string,
    token: string,
    isLogin: boolean,
}

export const enum LoginActionTypes {
    SET_LOGIN = 'SET_LOGIN',
}

export interface LoginState {
    readonly login: any,
    readonly password: any,
    readonly token: any,
    readonly isLogin: boolean, 
}