import { Middleware } from 'redux';
import { createRandomNumber } from '../connectors/ApiConnector';
import { COUNTER_DOUBLE_ASYNC, COUNTER_INCREMENT } from '../routes/Counter/modules/counter'
import { createAction } from '@common/reducers/lib/ActionCreator'

// Receives all actions but only processes ones defined below before they reach the store's reducer.
export const apiMiddleware: Middleware = (store) => (next) => (action) => {

  switch (action.type) {
    case COUNTER_DOUBLE_ASYNC:
      // Listen for double number action then add random number from API response
      createRandomNumber(3000)
        .then((response) => {
          store.dispatch(createAction(COUNTER_INCREMENT, response.randomNumber))
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
