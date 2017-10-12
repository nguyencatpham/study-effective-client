// We only need to import the modules necessary for initial render
// import CoreLayout from '../layouts/CoreLayout'
// import CommonLayout from '../layouts/CommonLayout'
import MainLayout from '../layouts/MainLayout'
import PageLayout from '../layouts/PageLayout'
import HomeRoute from './Home/index'
import MenuRoute from './MenuPage/index'
import MenuDetailRoute from './MenuDetail/index'
import SignInRoute from './SignIn/index'
import SignUpRoute from './SignUp/index'
import ForgotPasswordRoute from './ForgotPassword'
import ResetPasswordRoute from './ResetPassword'
import UserProfileRoute from './UserProfile'
// import TopicRoute from './Topic'
import CartRoute from './Cart'
import ShippingRoute from './Shipping'
import BillingRoute from './Billing'
import CheckoutRoute from './CheckoutResult'
import ContactRoute from './Contact'
import ServiceRoute from './Service'
import SupportRoute from './Support'
import ProfilePictureRoute from './ProfilePicture'
import UserInfoRoute from './UserInfo'
import ChangePasswordRoute from './ChangePassword'
import JobRoute from './Job'
import ChefRoute from './Chef'
import PrivacyRoute from './Privacy'
import DriveRoute from './Drive'
import GiftsRoute from './Gifts'
import OrderRoute from './Order'
import MobileAppRoute from './MobileApp'
import OrderDetailRoute from './OrderDetail'
import ReviewRoute from './Review'
import {
  changeLanguage
} from '../containers/AppReducer'
import langRoutes from '../i18n/routers'
import {
  defaultLanguage
} from '../../config/config'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => {
  // const checkAuthorize = (nextState, transition) => {
  //   // if router not home "/" check authenticate
  //   if (nextState.location.pathname !== '/') {
  //     let state = store.getState()
  //     // if (!state.app.acceptToken) { transition('/signin') }
  //   }
  // }
  const setLanguage = (nextState, transition) => {
    let lang = nextState.location.pathname.substring(1, 3)
    let _defaultLanguage = store.getState().app.language || defaultLanguage
    changeLanguage(lang || _defaultLanguage)
  }
  const userRedirect = (nextState, transition) => {
    console.log('redirect from ', nextState.location.pathname)
    if (nextState.location.pathname.includes('/vi') || nextState.location.pathname.includes('/en')) {
      transition(nextState.location.pathname.substring(3, nextState.location.pathname.length - 3))
    }
    transition('/')
  }
  let routes = []
  let otherRoutes = []
  langRoutes.forEach(function (lang) {
    let langRoute = lang.name
    routes.push({
      path: langRoute,
      onEnter: setLanguage,
      childRoutes: [
        // menu
        {
          path: lang.menu,
          ...MenuRoute(store)
        },
        // menu detail
        {
          path: `${lang.menu}/:seName`,
          ...MenuDetailRoute(store)
        },
        // cart
        {
          path: lang.cart,
          ...CartRoute(store)
        },
        // shipping
        {
          path: lang.shipping,
          ...ShippingRoute(store)
        },
        // billing
        {
          path: lang.billing,
          ...BillingRoute(store)
        },
        // jobl
        {
          path: lang.job,
          ...JobRoute(store)
        },
        // support
        {
          path: lang.support,
          ...SupportRoute(store)
        },
        // service
        {
          path: lang.service,
          ...ServiceRoute(store)
        },
        // user_profile
        {
          path: lang.user_profile,
          ...UserProfileRoute(store)
        },
        // profile picture
        {
          path: lang.profile_picture,
          ...ProfilePictureRoute(store)
        },
        // change password
        {
          path: lang.change_password,
          ...ChangePasswordRoute(store)
        },
        // user info
        {
          path: lang.user_info,
          ...UserInfoRoute(store)
        },
        // contact
        {
          path: lang.contact,
          ...ContactRoute(store)
        },
        // term - privacy
        {
          path: lang.term,
          ...PrivacyRoute(store)
        },
        // chef
        {
          path: `${lang.chef}/:id`,
          ...ChefRoute(store)
        },
        // gif
        {
          path: lang.gifts,
          ...GiftsRoute(store)
        },
        // mobile app
        {
          path: lang.mobileApp,
          ...MobileAppRoute(store)
        },
        // drive
        {
          path: lang.drive,
          ...DriveRoute(store)
        },
        // order
        {
          path: lang.order,
          ...OrderRoute(store)
        },
        // order detail
        {
          path: `${lang.order_detail}/:orderId`,
          ...OrderDetailRoute(store)
        },
        // review
        {
          path: `${lang.review}/:productId`,
          ...ReviewRoute(store)
        }
      ]
    })
    otherRoutes.push({
      component: PageLayout,
      childRoutes: [
        // signin
        {
          path: lang.signin,
          ...SignInRoute(store)
        },
        // sign up
        {
          path: lang.signup,
          ...SignUpRoute(store)
        },
        // forgot pass
        {
          path: lang.forgot_password,
          ...ForgotPasswordRoute(store)
        },
        // reset_password
        {
          path: lang.reset_password,
          ...ResetPasswordRoute(store)
        }
      ]
    })
  })
  return [{
    path: '/',
    exact: true,
    component: MainLayout,
    indexRoute: HomeRoute(store),
    childRoutes: [...routes, ...otherRoutes, {
      // checkout
      path: 'checkout',
      ...CheckoutRoute(store)
    }, {
      path: '*',
      onEnter: userRedirect
    }]
  }]
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
