import { Middleware } from 'redux';
import { getIncrement } from '../connectors/ApiConnector';
import { COUNTER_DOUBLE_ASYNC, increment } from '../routes/Counter/modules/counter'

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next) => (action) => {

  switch (action.type) {
    case COUNTER_DOUBLE_ASYNC:
      getIncrement()
        .then((response) => {
          store.dispatch(increment(response.increment))
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
