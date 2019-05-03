import { Middleware } from 'redux';
import { randomNumber } from '../connectors/ApiConnector';
import { COUNTER_DOUBLE_ASYNC, increment } from '../routes/Counter/modules/counter'

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next) => (action) => {

  switch (action.type) {
    case COUNTER_DOUBLE_ASYNC:
      // Listen for double number action then add random number from API response
      randomNumber(3000)
        .then((response) => {
          store.dispatch(increment(response.randomNumber))
        })
        .catch(() => {
          store.dispatch({
            type: 'ERROR_ERROR',
          })
        })
      break
  }
  return next(action);

}
