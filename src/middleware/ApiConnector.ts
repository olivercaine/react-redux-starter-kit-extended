import { fetchAsync } from '../Functions'
import { COUNTER_INCREMENT, increment } from '../routes/Counter/modules/counter'

/*
  Receives all actions but only processes specific ones
*/
export default (store) => {
  const state = store.getState()
  return (next) => {
    return (action) => {
      const result = next(action)
      switch (action.type) {
        case COUNTER_INCREMENT:
          fetchAsync('http://www.fakeresponse.com/api/?sleep=2')
            .then((data) => {
              store.dispatch(increment(100))
            })
          break
        default:
          return state
      }
      return result
    }
  }
}
