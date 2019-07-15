import { action } from 'typesafe-actions';
import { LoginActionTypes, Login } from './types';

export const setLogin = (data: Login) => action(LoginActionTypes.SET_LOGIN, data);
