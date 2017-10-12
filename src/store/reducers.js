import {
  combineReducers
} from 'redux'
import {
  routerReducer as router
} from 'react-router-redux'
import {
  reducer as formReducer
} from 'redux-form'
import {
  intlReducer
} from 'react-intl-redux'
import customDatePickerReducer from '../components/CustomDatePicker/CustomDatePickerReducer'
import signinInReducer from '../routes/SignIn/modules/SignInReducer'
import loadingReducer from '../components/Loading/LoadingReducer'
import NotifyReducer from '../components/Notification/NotifyReducer'
import RatingReducer from '../components/Rating/RatingReducer'
import FacebookReducer from '../components/SocialLogin/FacebookReducer'
import appReducer from '../containers/AppReducer'
import homeReducer from '../routes/Home/modules/HomeReducer'
import menuPageReducer from '../routes/MenuPage/modules/MenuPageReducer'
import menuDetailReducer from '../routes/MenuDetail/modules/MenuDetailReducer'

// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076
const initialReducers = {
  // default value should be imported from the module/reducer
  home: homeReducer,
  form: formReducer,
  intl: intlReducer,
  loading: loadingReducer,
  notification: NotifyReducer,
  customDatePicker: customDatePickerReducer,
  app: appReducer,
  signin: signinInReducer,
  rating: RatingReducer,
  fb: FacebookReducer
  // menuPage: menuPageReducer,
  // menuDetail: menuDetailReducer
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...initialReducers,
    ...asyncReducers
  })
}

export const injectReducer = (store, {
  key,
  reducer
}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
