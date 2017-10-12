import { injectReducer } from '../../store/reducers'
import { signUpResetState } from './modules/SignUpReducer'

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
    store.dispatch(signUpResetState())
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
        const SignUp = require('./containers/SignUpContainer').default
        const reducer = require('./modules/SignUpReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, {key: 'signup', reducer})

        /*  Return getComponent   */
        cb(null, SignUp)

        /* Webpack named bundle   */
      }, 'SignUp')
    }
  }
}
