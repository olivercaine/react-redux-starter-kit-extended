import { ICounter } from '../../../Definitions';

// ------------------------------------
// Constants
// ------------------------------------
export const SHOULD_SIGN_IN = 'SHOULD_SIGN_IN'
export const DID_SIGN_IN = 'DID_SIGN_IN'

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOULD_SIGN_IN]: (state, action) => {
    const newState = Object.assign({}, state)
    newState.submitting = true;
    newState.generalErrors = [];
    return newState
  },
  [DID_SIGN_IN]: (state, action) => {
    const newState = Object.assign({}, state)
    newState.submitting = false;
    newState.generalErrors = action.payload.generalErrors;
    return newState
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  generalErrors: [],
  submitting: false,
}
export function counterReducer(state = initialState, action): ICounter {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
