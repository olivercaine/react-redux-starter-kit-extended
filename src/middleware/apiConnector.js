import { COUNTER_DOUBLE_ASYNC } from '../routes/Counter/modules/counter.js'
import { fetchAsync } from '../functions'

export default store => {
  let state = store.getState()
  return next => {
    return action => {
      console.log('dispatching', action)
      console.log('next state', store.getState())
      let result = next(action)
      switch (action.type) {
        case COUNTER_DOUBLE_ASYNC:
          fetchAsync('http://www.fakeresponse.com/api/?sleep=2')
            .then((data) => {
              console.log(data)
            })
          break
        default:
          return state
      }
      return result
    }
  }
}
