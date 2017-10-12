import { injectReducer } from '../../store/reducers'
import { signInResetState } from './modules/SignInReducer'

export default (store) => {
  const onEnter = (nextState, transition) => {
    // let body = document.body;
    // if (body.className.indexOf('logreg-wrapp') === -1) {
    //   body.className += ' logreg-wrapp';
    // }
  }

  const onLeave = (nextState, transition) => {
    // let body = document.body;
    // if (body.className.indexOf('logreg-wrapp') !== -1) {
    //   body.className = body.className.replace(' logreg-wrapp', '');
    // }
    // reset state
    store.dispatch(signInResetState())
  }

  return {
    onEnter: onEnter,
    onLeave: onLeave,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const SignIn = require('./containers/SignInContainer').default
        const reducer = require('./modules/SignInReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'signin', reducer })

        /*  Return getComponent   */
        cb(null, SignIn)

        /* Webpack named bundle   */
      }, 'SignIn')
    }
  }
}
