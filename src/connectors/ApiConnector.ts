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
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  });
  let otherOptions = {};
  client.query({
    query: gql`
      query getUsers{
        users{
          firstName
          email
        }
        pets{
          id
          name
        }
      }
    `,
    variables: { lol: 'pop' },
    ...otherOptions
  })
  return post<LoginResponse>(authApi, creds)
}
  // post<LoginResponse>(authApi, creds)
