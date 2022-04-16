import { IHttpResponse, post } from '@olliecaine/fetch';
import { ISignInState } from './../reducers/SignInReducer';

export interface LoginResponse extends ISignInState {
  // TODO remove `extends ISignInState` then add proper fields on interface
};
export const login = async (creds = undefined): Promise<IHttpResponse<LoginResponse>> =>
  post<LoginResponse>(`http://www.google.com/authenticate`, creds)
