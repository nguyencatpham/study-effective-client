import { injectReducer } from '../../store/reducers'
import { getUserProfile, userProfileClearMessage } from './modules/UserProfileReducer'
import UserInfoRoute from '../UserInfo'
import ChangePasswordRoute from '../ChangePassword'
import ProfilePicture from '../ProfilePicture'

export default (store) => {
  const onEnter = (nextState, transition) => {
    // get user profile from remote
    store.dispatch(getUserProfile())
  }
  const onLeave = (nextState, transition) => {
    // reset message
    store.dispatch(userProfileClearMessage())
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
        const UserProfile = require('./containers/UserProfileContainer').default
        const reducer = require('./modules/UserProfileReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'userProfile', reducer })

        /*  Return getComponent   */
        cb(null, UserProfile)

        /* Webpack named bundle   */
      }, 'UserProfile')
    },
    indexRoute: UserInfoRoute(store),
    childRoutes: [
      ChangePasswordRoute(store),
      ProfilePicture(store)
    ]
  }
}
