import { createAction } from '@common/reducers/lib/ActionCreator';
import { createRandomNumber } from 'connectors/ApiConnector';
import { ICounter } from '../../../Definitions';
import { ERROR_SUFFIX } from '../../../middleware/ErrorLogger';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return async (dispatch, getState) => {
    try {
      await createRandomNumber(2000) // Mock API delay
      dispatch(createAction(COUNTER_DOUBLE_ASYNC, getState().counter))
    } catch (error) {
      dispatch(createAction(COUNTER_DOUBLE_ASYNC + ERROR_SUFFIX, error))
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state: number, action): ICounter => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state: number): ICounter => state * 2,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: ICounter = 0
export function counterReducer(state = initialState, action): ICounter {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
