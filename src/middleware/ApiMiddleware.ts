import { IHttpResponse } from '@olliecaine/fetch';
import { createAction } from '@olliecaine/reducers';
import { Dispatch, Middleware } from 'redux';
import { login, LoginResponse } from '../connectors/ApiConnector';
import { AuthActions, SHOULD_SIGN_IN } from '../reducers/AuthReducer';
import { COUNTER_INCREMENT, DEFAULT_INCREMENT } from './../routes/Counter/modules/counter';

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next: Dispatch<any>) => (action) => {
  // TODO switch to async
  switch (action.type) {
    case SHOULD_SIGN_IN:
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
          );
        })
      next(createAction(COUNTER_INCREMENT, DEFAULT_INCREMENT))

      break;
  }
  return next(action);
};
