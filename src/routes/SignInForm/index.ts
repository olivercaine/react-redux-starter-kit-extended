import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'form',
  /*  Async getComponent is only invoked when route matches   */
  // @ts-expect-error
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
    and embed an async module loader (jsonp) when bundling   */
    // @ts-expect-error
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./containers/FormContainer').default
      const reducer = require('../../reducers/AuthReducer').authReducer

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'signInForm', reducer })

      /*  Return getComponent   */
      cb(undefined, Counter)

      /* Webpack named bundle   */
    }, 'project')
  },
})
