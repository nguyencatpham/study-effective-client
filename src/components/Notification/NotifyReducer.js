import messages from '../../i18n/base-en'

// ------------------------------------
// Constants
// ------------------------------------
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const ADD_MESSAGE = 'ADD_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export const addMessage = (message) => (dispatch, getState) => {
  dispatch(addMessageSuccess(message))
}
export const clearMessage = () => (dispatch, getState) => {
  dispatch(clearMessageSuccess())
}

export const addMessageSuccess = (data) => ({
  type: ADD_MESSAGE,
  data
})
export const clearMessageSuccess = () => ({
  type: CLEAR_MESSAGE
})
export const actions = {
  clearMessage,
  addMessage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CLEAR_MESSAGE]: (state, action) => initialState,
  [ADD_MESSAGE]: (state, action) => action.data
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState =
  {
    id: '',
    type: 0,
    title: messages.notification_empty,
    body: messages.notification_empty
  }
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
