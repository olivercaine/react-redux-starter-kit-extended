import { Defaults } from 'Constants'
import { COUNTER_DOUBLE_ASYNC, increment } from '../routes/Counter/modules/counter'

/*
  Receives all actions but only processes specific ones.
  Use SHOULD_[action name] and DID_[action name]
*/
export default (store) => {
  const state = store.getState()
  return (next) => {
    return (action) => {
      const result = next(action)
      switch (action.type) {
        case COUNTER_DOUBLE_ASYNC:
          setTimeout(() => {
            store.dispatch(increment(Defaults.Increment))
          }, 1000)
          break
        default:
          return state
      }
      return result
    }
  }
}
