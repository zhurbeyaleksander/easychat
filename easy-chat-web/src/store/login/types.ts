export interface ILogin {
    login: string,
    password: string,
    token: string,
    isLogin: boolean,
}

export const enum LoginActionTypes {
    SET_LOGIN = 'SET_LOGIN',
}

export interface ILoginState {
    readonly login: string,
    readonly password: string,
    readonly token: string,
    readonly isLogin: boolean, 
}