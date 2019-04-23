import { Defaults } from 'Constants'
import { Middleware } from 'redux';
import { getSomething } from '../connectors/ApiConnector';
import { COUNTER_DOUBLE_ASYNC, increment } from '../routes/Counter/modules/counter'

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next) => (action) => {

  switch (action.type) {
    case COUNTER_DOUBLE_ASYNC:
      getSomething(store.dispatch(increment(Defaults.Increment)))
      break
  }

  return next(action);
}
