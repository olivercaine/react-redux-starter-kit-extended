import { Defaults } from 'Constants'
import { Middleware } from 'redux';
import { COUNTER_DOUBLE_ASYNC, increment } from '../routes/Counter/modules/counter'

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiConnector: Middleware = (store) => (next) => (action) => {

  switch (action.type) {
    case COUNTER_DOUBLE_ASYNC:
      setTimeout(() => {
        store.dispatch(increment(Defaults.Increment))
      }, 1000)
      break
  }

  return next(action);
}
