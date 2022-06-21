import {
  gql, InMemoryCache
} from '@apollo/client';
import { ApolloClient } from '@apollo/client/core';
import { IHttpResponse, post } from '@olliecaine/fetch';
export interface LoginResponse {
  token: string
};
export const authApi = '/mock'
export const login = async (creds = undefined): Promise<IHttpResponse<LoginResponse>> => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  let otherOptions = {};
  client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
    variables: { lol: 'pop' },
    ...otherOptions
  })
  return post<LoginResponse>(authApi, creds)
}
  // post<LoginResponse>(authApi, creds)
