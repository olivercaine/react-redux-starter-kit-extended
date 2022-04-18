import { IHttpResponse, post } from '@olliecaine/fetch';

export interface LoginResponse {
  token: string
};
export const authApi = 'http://www.google.com/authenticate'
export const login = async (creds = undefined): Promise<IHttpResponse<LoginResponse>> =>
  post<LoginResponse>(authApi, creds)
