import { ICounter, IReduxAction } from './../../../Definitions';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1): IReduxAction {
  return {
    payload : value,
    type    : COUNTER_INCREMENT,
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          payload : getState().counter,
          type    : COUNTER_DOUBLE_ASYNC,
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  doubleAsync,
  increment,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state: number, action): ICounter => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state: number, action): ICounter => state * 2,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: ICounter = 0
export default function counterReducer(state = initialState, action): ICounter {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
