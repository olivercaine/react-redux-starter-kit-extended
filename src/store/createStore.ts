import { browserHistory } from 'react-router'
import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from '../middleware/ApiMiddleware'
import { errorLoggerMiddleware } from '../middleware/ErrorLogger'
import { updateLocation } from './location'
import makeRootReducer, { IRootState } from './reducers'

export const createStore = (initialState = {} as IRootState) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, apiMiddleware, errorLoggerMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  // @ts-ignore
  if (typeof __DEV__ !== 'undefined') {
    // @ts-ignore
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      // @ts-ignore
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore<IRootState>(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  // @ts-ignore
  store.asyncReducers = {}

  // @ts-ignore To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      // @ts-ignore
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
