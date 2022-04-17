import { IHttpResponse, post } from '@olliecaine/fetch';

export interface LoginResponse {
  token: string
};
export const login = async (creds = undefined): Promise<IHttpResponse<LoginResponse>> =>
  post<LoginResponse>(`http://www.google.com/authenticate`, creds)
