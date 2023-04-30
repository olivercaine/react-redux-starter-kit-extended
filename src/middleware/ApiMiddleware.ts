import { IHttpResponse } from '@olliecaine/fetch'
import { Dispatch, Middleware } from 'redux'
import { LoginResponse, login } from '../connectors/ApiConnector'
import { AuthAction, AuthActions } from '../state/reducers/AuthReducer'
import { CounterActions } from './../routes/Counter/modules/counter'

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next: Dispatch<any>) => (action) => {
  switch (action.type) {
    case AuthAction.SHOULD_SIGN_IN:
      login()
        .then((response: IHttpResponse<LoginResponse>) => {
          store.dispatch(
            AuthActions.didSignIn({
              submitting: false,
              token: response.parsedBody?.token,
              generalErrors: []
            })
          )
        })
        .catch(() => {
          store.dispatch(
            AuthActions.didSignIn({
              token: undefined,
              submitting: false,
              generalErrors: [
                'Unable to connect to API',
                'Internet connection very slow',
              ],
            })
          )
        })
      next(CounterActions.increment(1))

      break
  }
  return next(action)
}
