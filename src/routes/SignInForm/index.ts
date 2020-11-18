import { injectReducer } from '../../store/reducers'

// tslint:disable-next-line
export default (store) => ({
  path : 'form',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
    and embed an async module loader (jsonp) when bundling   */
    // @ts-ignore
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./containers/FormContainer').default
      const reducer = require('../../reducers/SignInReducer').signinReducer

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'signInForm', reducer })

      /*  Return getComponent   */
      // tslint:disable-next-line
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'project')
  },
})
