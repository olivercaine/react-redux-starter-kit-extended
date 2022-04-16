import { Dispatch, Middleware } from 'redux';
import { login } from '../connectors/ApiConnector';
import { ISignInState, SHOULD_SIGN_IN } from '../reducers/SignInReducer';
import { SignInActions } from './../reducers/SignInReducer';

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next: Dispatch<any>) => (action) => {
  switch (action.type) {
    case SHOULD_SIGN_IN:
      login()
        .then((response) => {
          // @ts-ignore
          if (response.ok) store.dispatch(SignInActions.didSignIn(response.parsedBody));
        })
        .catch(() => {
          let signInResponse: ISignInState = {
            submitting: false,
            generalErrors: [
              'Unable to connect to API',
              'Internet connection very slow',
            ],
          }
          store.dispatch(SignInActions.didSignIn(signInResponse));
        })

      break;
  }
  return next(action);
};
