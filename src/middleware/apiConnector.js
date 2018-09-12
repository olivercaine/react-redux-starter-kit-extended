import { increment, COUNTER_INCREMENT } from '../routes/Counter/modules/counter.js'
import { fetchAsync } from '../functions'

/*
 Recieves all actions but only processes specifc ones
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
