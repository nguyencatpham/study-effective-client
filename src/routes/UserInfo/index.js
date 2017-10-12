import { injectReducer } from '../../store/reducers'

export default (store) => {
  const onEnter = (nextState, transition) => {
  }
  const onLeave = (nextState, transition) => {
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
        const UserInfo = require('./containers/UserInfoContainer').default
        // const reducer = require('./modules/UserProfileReducer').default;

        /*  Add the reducer to the store on key 'counter'  */
        // injectReducer(store, {key: 'userProfile', reducer});

        /*  Return getComponent   */
        cb(null, UserInfo)

        /* Webpack named bundle   */
      }, 'UserInfo')
    }
  }
}
