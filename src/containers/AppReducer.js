import axios from 'axios'
import * as routeActions from 'react-router-redux'
import { updateIntl } from 'react-intl-redux'
import i18n from '../i18n'
import { defaultLanguage } from '../../config/config'

// ------------------------------------
// Constants
// ------------------------------------
export const RESET_APP_STATE = 'RESET_APP_STATE'
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE'
export const UPDATE_USER_DATA_FOR_APP_STATE = 'UPDATE_USER_DATA_FOR_APP_STATE'
export const SIGNOUT_ERROR = 'SIGNOUT_ERROR'
// cart
export const UPDATE_CART = 'UPDATE_CART'
// cart item
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
// language
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const GET_LANGUAGES = 'GET_LANGUAGES'
// address
export const ADD_ADDRESS_STATE = 'ADD_ADDRESS_STATE'
export const UPDATE_DEFAULT_ADDRESS_STATE = 'UPDATE_DEFAULT_ADDRESS_STATE'
// payment
export const SET_PAYMENT = 'SET_PAYMENT'
// setting
export const GET_SETTING = 'GET_SETTING'
// token
export const UPDATE_ANONYMOUSTOKEN = 'UPDATE_ANONYMOUSTOKEN'

// ------------------------------------
// Actions
// ------------------------------------
export const updateAnonymousTokenState = (data) => ({
  type: UPDATE_ANONYMOUSTOKEN,
  data
})
export const getSettingState = (data) => ({
  type: GET_SETTING,
  data
})
export const getLanguagesState = (data) => ({
  type: GET_LANGUAGES,
  data
})
export const setPaymentMethodState = (paymentType, paymentMethod, bankCode) => ({
  type: SET_PAYMENT,
  data: { paymentType, paymentMethod, bankCode }
})
export const updateDefaultAddressState = (id, street) => ({
  type: UPDATE_DEFAULT_ADDRESS_STATE,
  data: { id, street }
})
export const addAddressState = (data) => ({
  type: ADD_ADDRESS_STATE,
  data
})
export function updateAppState (userData) {
  return {
    type: UPDATE_APP_STATE,
    userData
  }
}
export const addToCartState = (data) => {
  return {
    type: ADD_CART_ITEM,
    data
  }
}
export const updateCartItemState = (data) => {
  return {
    type: UPDATE_CART_ITEM,
    data
  }
}
export const removeCartItemState = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    id
  }
}
export const updateCartState = (data) => {
  return {
    type: UPDATE_CART,
    data
  }
}
export function updateUserDataForAppState (userData) {
  return {
    type: UPDATE_USER_DATA_FOR_APP_STATE,
    userData
  }
}
// ------------------------------------
// Actions
// ------------------------------------

export const rewriteLink = (message, isRoot = false) => (dispatch, getState) => {
  let { app } = getState()
  if (!message || !app || !app.language) {
    return '/'
  }
  if (isRoot) {
    return `/${message}`
  }
  return `/${app.language}/${message}`
}
export function signOut () {
  return (dispatch, getState) => {
    axios.post('/accounts/logout')
      .then(function (response) {
        // clear userData
        dispatch(updateAppState())
        dispatch(routeActions.push('/signin'))
      }).catch(function (error) {
        dispatch(signOutError(error.message))
      })
  }
}

export function signOutError () {
  return {
    type: SIGNOUT_ERROR
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changeLanguage (language) {
  return (dispatch, getState) => {
    // console.log('wwwwwwwwwwwwwwwwwwwwww', window)
    // if (typeof (window)) {
    //   let lang = window.location.pathname.substring(1, 3)
    //   if (lang !== language && window.location.pathname !== '/') {
    //     let newPathName = `/${language}/${window.location.pathname.substring(4, window.location.pathname.length)}`
    //     dispatch(routeActions.push(newPathName))
    //   }
    // }
    const intlData = {
      locale: language,
      messages: i18n[language]
    }
    dispatch(updateIntl(intlData))
    dispatch(changeLanguageValue(language))
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changeLanguageValue (language) {
  return {
    type: CHANGE_LANGUAGE,
    language
  }
}

export const actions = {
  updateAppState,
  signOut,
  updateUserDataForAppState,
  // cart
  addToCartState,
  updateCartItemState,
  removeCartItemState,
  updateCartState,
  // lang
  changeLanguage,
  getLanguagesState,
  // address
  addAddressState,
  updateDefaultAddressState,
  // payment
  setPaymentMethodState,
  getSettingState,
  updateAnonymousTokenState,
  rewriteLink
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RESET_APP_STATE]: (state, action) => ({
    ...state,
    acceptToken: action.payload && action.payload.acceptToken ? action.payload.acceptToken : null,
    refreshToken: action.payload && action.payload.refreshToken ? action.payload.refreshToken : null,
    userData: action.payload && action.payload.userData ? action.payload.userData : {}
  }),
  [UPDATE_APP_STATE]: (state, action) => {
    // console.log(action.userData)

    if (action.userData) {
      return {
        ...state,
        acceptToken: action.userData && action.userData.acceptToken ? action.userData.acceptToken : null,
        refreshToken: action.userData && action.userData.refreshToken ? action.userData.refreshToken : null,
        userData: action.userData ? action.userData : {}
      }
    }

    return initialState
  },
  [UPDATE_USER_DATA_FOR_APP_STATE]: (state, action) => {
    if (action.userData) {
      return {
        ...state,
        userData: {
          ...state.userData,
          firstName: action.userData.firstName,
          lastName: action.userData.lastName,
          phoneNumber: action.userData.phoneNumber
        }
      }
    }

    return initialState
  },
  [ADD_CART_ITEM]: (state, action) => {
    // should be refactor
    // console.log(state, action)
    if (action.data && state.userData && state.userData.cart && state.userData.cart.items) {
      let items = state.userData.cart.items
      if (items.some(x => x.id === action.data.id)) {
        items.find(x => x.id === action.data.id).quantity = action.data.quantity
      } else {
        items.push(action.data)
      }
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: {
            ...state.userData.cart,
            // items: state.userData.cart.items.some(x => x.id === action.data.id?{...x,quantity: action.data.quantity}:x),
            // items: isUpdate? {...items,quantity: isUpdate?action.data.quantity:}items.find(x => x.id === action.data.id).quantity = action.data.quantity:{...items,action.data},
            items: items,
            sumQuantity: Object.keys(items).reduce((previous, key) => {
              return previous + items[key].quantity
            }, 0)
          }
        }
      }
    }
    // for first item to be added in cart
    return {
      ...state,
      userData: {
        ...state.userData,
        cart: {
          ...state.userData.cart,
          items: [action.data],
          sumQuantity: action.quantity
        }
      }
    }
  },
  [UPDATE_CART_ITEM]: (state, action) => {
    if (action.data && state.userData && state.userData.cart && state.userData.cart.items) {
      let items = state.userData.cart.items.map(x => x.id === action.data.id ? {
        ...x,
        quantity: action.data.quantity
      } : x)
      // console.log(items)

      return {
        ...state,
        userData: {
          ...state.userData,
          cart: {
            ...state.userData.cart,
            items: items,
            sumQuantity: Object.keys(items).reduce((previous, key) => {
              return previous + items[key].quantity
            }, 0)
          }
        }
      }
    }
  },
  [REMOVE_CART_ITEM]: (state, action) => {
    if (action.id && state.userData && state.userData.cart && state.userData.cart.items) {
      let items = state.userData.cart.items.filter(item => (item.menuProductId !== action.id))
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: {
            ...state.userData.cart,
            items: items,
            sumQuantity: Object.keys(items).reduce((previous, key) => {
              return previous + items[key].quantity
            }, 0)
          }
        }
      }
    }
  },
  [UPDATE_CART]: (state, action) => {
    if (action.data && state.userData && state.userData.cart) {
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.data
        }
      }
    }
    return {
      ...state,
      userData: {
        ...state.userData,
        cart: {
          total: 0,
          sumQuantity: 0,
          items: []
        }
      }
    }
  },
  [CHANGE_LANGUAGE]: (state, action) => {
    return {
      ...state,
      language: action.language
    }
  },
  [ADD_ADDRESS_STATE]: (state, action) => ({ ...state, userData: { ...state.userData, addresses: [...state.userData.addresses, action.data] } }),
  [UPDATE_DEFAULT_ADDRESS_STATE]: (state, action) => ({ ...state, userData: { ...state.userData, defaultShippingAddress: action.data.id, defaultBillingAddress: action.data.id, street: action.data.street } }),
  [SET_PAYMENT]: (state, action) => {
    return { ...state, userData: { ...state.userData, paymentType: action.data.paymentType, paymentMethod: action.data.paymentMethod, bankCode: action.data.bankCode } }
  },
  [GET_LANGUAGES]: (state, action) => ({ ...state, languages: action.data }),
  [GET_SETTING]: (state, action) => ({ ...state, settings: action.data }),
  [UPDATE_ANONYMOUSTOKEN]: function (state, action) {
    return { ...state, anonymousToken: action.data }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  // intl: {
  //   locale: 'vi',
  //   messages: {
  //     'reewodHiw.title': 'Xin Chao!'
  //   }
  // },
  // language: 'vi',
  language: defaultLanguage,
  acceptToken: null,
  refreshToken: null,
  anonymousToken: '258',
  userData: {
    cart: {
      total: 0,
      sumQuantity: 0,
      items: []
    },
    addresses: []
  }
}

export default function appReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
