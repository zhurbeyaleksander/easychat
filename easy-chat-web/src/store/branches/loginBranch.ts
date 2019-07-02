export const SET_LOGIN = 'SET_LOGIN';

const initialState = {
    login: null,
    password: null,
    token: null,
};

export function loginReducer(state= initialState, action: any) {
    switch (action.type) {
        case SET_LOGIN: 
        return {
            ...state,
            login: action.props.login,
            password: action.props.password,
            token: action.props.token,
        }
        default:
            return state;
    }
}

export function setLogin(login: any, password: any, token: any) {
    return {
        type: SET_LOGIN,
        props: {
            login: login,
            password: password,
            token: token,
        }
    } 
}