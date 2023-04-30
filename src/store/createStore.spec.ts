import { CounterActions } from '../routes/Counter/modules/counter'
import {
  default as createStore
} from '../store/createStore'

describe('(Store) createStore', () => {
  let store

  before(() => {
    store = createStore()
  })

  it('should have an empty asyncReducers object', () => {
    expect(store.asyncReducers).to.be.an('object')
    expect(store.asyncReducers).to.be.empty()
  })

  describe('(Location)', () => {
    it('store should be initialized with Location state', () => {
      const location = {
        pathname: '/echo'
      }
      store.dispatch({
        type: 'LOCATION_CHANGE',
        payload: location
      })
      expect(store.getState().location).to.deep.equal(location)
    })
  })

  describe('(Counter)', () => {
    it('Should start at 0', () => {
      expect(store.getState().counter).to.deep.equal(0)
    })
    it('Should start at 0', () => {
      store.dispatch(CounterActions.increment(27))
      expect(store.getState().counter).to.deep.equal(27)
    })
  })
})
