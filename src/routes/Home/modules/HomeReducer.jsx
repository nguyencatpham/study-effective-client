import axios from 'axios'
import { getLanguagesState, getSettingState } from '../../../containers/AppReducer'
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------
export const getSetting = () => (dispatch, getState) => {
  let { settings } = getState().app
  if (settings === undefined) {
    axios.get('/settings')
      .then((response) => {
        dispatch(getSettingState(response.data))
      })
      .catch((err) => {
        console.log('ERROR_GET_SETTING', err.message)
      })
  }
}
export const getLanguage = () => (dispatch, getState) => {
  let { languages } = getState().app
  if (languages === undefined) {
    axios.get('/languages')
      .then((response) => {
        dispatch(getLanguagesState(response.data))
      })
      .catch((err) => {
        console.log('ERROR_GET_LANGUAGE', err.message)
      })
  }
}
export const actions = {
  getLanguage,
  getSetting
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
