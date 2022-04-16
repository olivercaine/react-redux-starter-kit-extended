import { createAction } from '@olliecaine/reducers';
import { Middleware } from 'redux';
import { DID_SIGN_IN, SHOULD_SIGN_IN } from '../reducers/SignInReducer';

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SHOULD_SIGN_IN:
      setTimeout(() => {
        const mockApiResponse = {
          generalErrors: [
            'Unable to connect to API',
            'Internet connection very slow',
          ],
        };
        store.dispatch(createAction(DID_SIGN_IN, mockApiResponse));
      }, 2000);
      break;
  }
  return next(action);
};
