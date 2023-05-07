import { createAction } from '@olliecaine/reducers'
import { ActionsUnion, IReduxReducer } from '@olliecaine/reducers/types'
import { IState as ISignInFormState } from '../../routes/SignInForm/components/SignInForm'

// ------------------------------------
// Action types
// ------------------------------------
export enum ActionTypes {
  SHOULD_SIGN_IN = 'SHOULD_SIGN_IN',
  DID_SIGN_IN = 'DID_SIGN_IN'
}

// ------------------------------------
// Action Creators
// ------------------------------------
const actions = {
  shouldSignIn: (signInCredentials: ISignInFormState) => createAction(ActionTypes.SHOULD_SIGN_IN, signInCredentials),
  didSignIn: (authDetails: IState) => createAction(ActionTypes.DID_SIGN_IN, authDetails)
}

type Actions = ActionsUnion<typeof actions>

// ------------------------------------
// State
// ------------------------------------
interface IState {
  token?: string
  submitting: boolean
  generalErrors?: string[]
}

const initialState: IState = {
  submitting: false
}

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (
  state: IState = initialState,
  action: Actions
): IState => {
  switch (action.type) {
    case ActionTypes.SHOULD_SIGN_IN: {
      const shouldSignInState = Object.assign({}, state)
      shouldSignInState.submitting = true
      shouldSignInState.generalErrors = []
      return shouldSignInState
    }
    case ActionTypes.DID_SIGN_IN: {
      const didSignInState = Object.assign({}, state)
      didSignInState.submitting = false
      didSignInState.token = action.payload.token
      didSignInState.generalErrors = action.payload.generalErrors
      return didSignInState
    }
    default:
      return state
  }
}

// ------------------------------------
// Expose
// ------------------------------------
export const authReducer: IReduxReducer<typeof reducer, ReturnType<typeof reducer>, typeof actions> = {
  initialState,
  reducer,
  actions,
}
