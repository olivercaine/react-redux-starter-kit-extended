import { combineReducers, Reducer } from 'redux'
import { counterReducer } from '../routes/Counter/modules/counter'
import { authReducer } from './../reducers/AuthReducer'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers): Reducer<IRootState> =>
  combineReducers<IRootState>({
    location: locationReducer,
    counter: counterReducer,
    ...asyncReducers
  })

// TODO: dynamically create IRootState,
// e.g. `export type IRootState = ReturnType<typeof makeRootReducer>;` (not currently working)
export interface IRootState {
  counter: ReturnType<typeof counterReducer>
  signInForm: ReturnType<typeof authReducer>
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
