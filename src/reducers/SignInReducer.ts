import { createAction, IActionWithPayload } from '@olliecaine/reducers';
import { IState } from './../routes/SignInForm/components/SignInFormWrapper';
export interface ISignInState {
  submitting: boolean;
  generalErrors?: string[];
}

// ------------------------------------
// Action names
// ------------------------------------
export const SHOULD_SIGN_IN = 'SHOULD_SIGN_IN';
export const DID_SIGN_IN = 'DID_SIGN_IN';

// ------------------------------------
// Action definitions
// ------------------------------------
export type SignInAction =
  | IActionWithPayload<typeof SHOULD_SIGN_IN, IState>
  | IActionWithPayload<typeof DID_SIGN_IN, ISignInState>;

// ------------------------------------
// Action Creators
// ------------------------------------
export const SignInActions = {
  shouldSignIn: (payload: IState): SignInAction => createAction(SHOULD_SIGN_IN, payload),
  didSignIn: (payload: ISignInState): SignInAction => createAction(DID_SIGN_IN, payload)
}

// ------------------------------------
// Domain & State
// ------------------------------------
export const initialState: ISignInState | null = { submitting: false }; // TODO: why eslint no-null not working?

// ------------------------------------
// Reducer
// ------------------------------------
export function signinReducer (
  state: ISignInState | null = initialState,
  action: SignInAction,
): ISignInState | null {
  switch (action.type) {
    case SHOULD_SIGN_IN:
      const shouldSignInState = Object.assign({}, state);
      shouldSignInState.submitting = true;
      shouldSignInState.generalErrors = [];
      return shouldSignInState;
    case DID_SIGN_IN:
      const didSignInState = Object.assign({}, state);
      didSignInState.submitting = false;
      didSignInState.generalErrors = action.payload.generalErrors;
      return didSignInState;
    default:
      return state;
  }
}
