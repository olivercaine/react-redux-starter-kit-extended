import { increment, COUNTER_INCREMENT } from '../routes/Counter/modules/counter'
import { fetchAsync } from '../Functions'

/*
  Receives all actions but only processes specific ones
*/
export default store => {
  let state = store.getState()
  return next => {
    return action => {
      console.log('dispatching', action)
      console.log('next state', store.getState())
      let result = next(action)
      switch (action.type) {
        case COUNTER_INCREMENT:
          fetchAsync('http://www.fakeresponse.com/api/?sleep=2')
            .then((data) => {
              console.log(data)
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
