import { injectReducer } from '../../store/reducers'
import { getLanguage, getSetting } from './modules/HomeReducer'

export default (store) => {
  const getData = (nextState, transition) => {
    if (store) {
      store.dispatch(getLanguage())
      store.dispatch(getSetting())
    }
  }

  return {
    path: '',
    onEnter: getData,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Home = require('./containers/HomeContainer').default
        const reducer = require('./modules/HomeReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'home', reducer })

        /*  Return getComponent   */
        cb(null, Home)

        /* Webpack named bundle   */
      }, 'Home')
    }
  }
}

// import Home from './components/Home'
//
// // Sync route definition
// export default {
//  component : Home
// }
