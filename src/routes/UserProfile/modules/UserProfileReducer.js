import axios from 'axios'
import { updateUserDataForAppState } from '../../../containers/AppReducer'
import { addMessage } from '../../../components/Notification/NotifyReducer'
import { ERROR, SUCCESS, INFO } from '../../../static/enum/Message.enum'
import messages from '../../../i18n/base-en'
// ------------------------------------
// Constants
// ------------------------------------
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR'
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS'
export const UPDATE_USER_INFO_ERROR = 'UPDATE_USER_INFO_ERROR'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR'
export const USER_PROFILE_RUNNING = 'USER_PROFILE_RUNNING'
export const USER_PROFILE_CLEAR_MESSAGE = 'USER_PROFILE_CLEAR_MESSAGE'
export const UPLOAD_AVATAR = 'UPLOAD_AVATAR'
export const UPDATE_PROFILE_PICTURE = 'UPDATE_PROFILE_PICTURE'

// ------------------------------------
// Actions
// ------------------------------------
export function getUserProfile () {
  return (dispatch, getState) => {
    axios.get('/accounts/profile')
      .then(function (response) {
        dispatch(getUserProfileSuccess(response.data))
      }).catch(function (error) {
        dispatch(getUserProfileError())
        dispatch(addMessage({ type: ERROR, title: messages.notification_account, body: messages.notification_account_login_error }))
        console.log('ERROR_GET_CATEGORY', error.message)
      })
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getUserProfileSuccess (user) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getUserProfileError (user = {}) {
  return {
    type: GET_USER_PROFILE_ERROR,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserInfo (user) {
  return (dispatch, getState) => {
    const { userProfile } = getState()
    if (!userProfile.isRunning) {
      dispatch(userProfileRunning())

      axios.put('/accounts/updateProfile', {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        imageId: user.imageId ? user.imageId : 0
      }
      ).then(function (response) {
        dispatch(updateUserInfoSuccess(user))
        dispatch(updateUserDataForAppState(user))
      }).catch(function (error) {
        dispatch(updateUserInfoError(error.response.data))
        console.log('ERROR_GET_CATEGORY', error.message)
      })
    }
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changePassword (user) {
  return (dispatch, getState) => {
    const { userProfile } = getState()
    if (!userProfile.isRunning) {
      dispatch(userProfileRunning())

      axios.put('/accounts/changePassword', {
        oldPassword: user.oldPassword,
        password: user.password,
        confirmPassword: user.confirmPassword
      }
      ).then(function (response) {
        dispatch(changePasswordSuccess(response.data))
      }).catch(function (error) {
        dispatch(changePasswordError(error.response.data))
        console.log('ERROR_GET_CATEGORY', error.message)
      })
    }
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserInfoSuccess (user) {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserInfoError (message) {
  return {
    type: UPDATE_USER_INFO_ERROR,
    message
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function userProfileRunning () {
  return {
    type: USER_PROFILE_RUNNING
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changePasswordSuccess (user) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changePasswordError (message) {
  return {
    type: CHANGE_PASSWORD_ERROR,
    message
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function userProfileClearMessage () {
  return {
    type: USER_PROFILE_CLEAR_MESSAGE
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateProfilePicture (profilePicture) {
  return {
    type: UPDATE_PROFILE_PICTURE,
    profilePicture
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function uploadAvatar (img) {
  return (dispatch, getState) => {
    var data = new FormData()
    data.append('foo', 'bar')
    data.append('file', img)

    axios.post('/images/upload', data)
      .then(function (response) {
        dispatch(updateProfilePicture(response.data))
      }).catch(function (error) {
        console.log('ERROR_GET_CATEGORY', error.message)
      })
  }
}

export const actions = {
  getUserProfile,
  updateUserInfo,
  changePassword,
  userProfileClearMessage,
  uploadAvatar
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_USER_PROFILE_SUCCESS]: function (state, action) {
    return { ...state, userData: action.user }
  },
  [GET_USER_PROFILE_ERROR]: function (state, action) {
    return { ...state, userData: action.user }
  },
  [UPDATE_USER_INFO_SUCCESS]: function (state, action) {
    return {
      ...state,
      userInfoErrorMessage: '',
      isRunning: false,
      userData: {
        ...state.userData,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        phoneNumber: action.user.phoneNumber
      }
    }
  },
  [UPDATE_USER_INFO_ERROR]: function (state, action) {
    return { ...state, userInfoErrorMessage: action.message, isRunning: false }
  },
  [CHANGE_PASSWORD_SUCCESS]: function (state, action) {
    return { ...state, changePasswordErrorMessage: '', isRunning: false }
  },
  [CHANGE_PASSWORD_ERROR]: function (state, action) {
    return { ...state, changePasswordErrorMessage: action.message, isRunning: false }
  },
  [USER_PROFILE_RUNNING]: function (state, action) {
    return { ...state, isRunning: true }
  },
  [USER_PROFILE_CLEAR_MESSAGE]: function (state, action) {
    return { ...state, userInfoErrorMessage: '', changePasswordErrorMessage: '', isRunning: false }
  },
  [UPDATE_PROFILE_PICTURE]: function (state, action) {
    return { ...state, userData: { ...state.userData, imageUrl: action.profilePicture.url, updateAt: action.profilePicture.createAt, imageId: action.profilePicture.id } }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  userInfoErrorMessage: '',
  changePasswordErrorMessage: '',
  isRunning: false,
  userData: {}
}
export default function userProfileReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
