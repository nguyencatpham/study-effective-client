// ------------------------------------
// Constants
// ------------------------------------
export const RATE = 'RATE'

// ------------------------------------
// Actions
// ------------------------------------
export const setStar = (star) => (dispatch, getState) => {
  console.log(star)
  dispatch(setStarSuccess(star))
}

// ------------------------------------
// Actions creator
// ------------------------------------
export const setStarSuccess = (data) => ({
  type: RATE,
  data
})
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RATE]: (state, action) => ({ ...state,
    point: action.data
  })
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  setStar
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
