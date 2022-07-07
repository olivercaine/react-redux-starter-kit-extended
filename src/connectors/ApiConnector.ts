import { IHttpResponse, post } from '@olliecaine/fetch'

export interface LoginResponse {
  token: string
};
export const authApi = '/mock'
export const login = async (creds = undefined): Promise<IHttpResponse<LoginResponse>> =>
  post<LoginResponse>(authApi, creds)
