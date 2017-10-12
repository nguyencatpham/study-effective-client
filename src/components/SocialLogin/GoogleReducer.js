import axios from 'axios'
import {
  langRoutes
} from '../../i18n/routers'
import * as routeActions from 'react-router-redux'
import {
  updateAppState
} from '../../containers/AppReducer'
import {
  signInSuccess
} from '../../routes/SignIn/modules/SignInReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
export const responseGoogle = (response) => (dispatch, getState) => {
  if (response) {
    const {
      app
    } = getState()
    axios.post('/accounts/facebook', {
      fbToken: response.access_token
    })
      .then((response) => {
        dispatch(signInSuccess(response.data))
        // get user info
        axios.get('/accounts/userinfo').then((res) => {
          response.data.cart = res.data.cart
          response.data.addresses = res.data.addresses
          response.data.defaultShippingAddress = res.data.defaultShippingAddress
          response.data.defaultBillingAddress = res.data.defaultBillingAddress
          response.data.imageUrl = res.data.imageUrl
          // response.data = { ...response.data, cart: res.data.cart, addresses: res.data.addresses, defaultShippingAddress: res.data.defaultShippingAddress, defaultBillingAddress: res.data.defaultBillingAddress, imageUrl: res.data.imageUrl }
        })
        dispatch(updateAppState(response.data))
        dispatch(responseGoogleSuccess(true))
        let menuRoute = langRoutes.find(x => x.id === app.language)
        dispatch(routeActions.push(`/${app.language}/${menuRoute.menu}`))
      })
      .catch((err) => {
        console.log('ERROR_GET_LANGUAGE', err.message)
      })

    let menuRoute = langRoutes.find(x => x.id === app.language)
    dispatch(routeActions.push(`/${app.language}/${menuRoute.menu}`))
  }
}
// ------------------------------------
// Actions creator
// ------------------------------------
export const responseGoogleSuccess = (data) => ({
  type: GOOGLE_LOGIN,
  data
})
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GOOGLE_LOGIN]: (state, action) => ({ ...state,
    isLogedIn: action.data
  })
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  responseGoogle
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function googleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
