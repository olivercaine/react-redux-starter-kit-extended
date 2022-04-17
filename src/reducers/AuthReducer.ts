import { createAction, IActionWithPayload } from '@olliecaine/reducers';
import { IState } from '../routes/SignInForm/components/SignInFormWrapper';

export interface IAuthState {
  token?: string;
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
  | IActionWithPayload<typeof DID_SIGN_IN, IAuthState>;

// ------------------------------------
// Action Creators
// ------------------------------------
export const AuthActions = {
  shouldSignIn: (payload: IState): SignInAction => createAction(SHOULD_SIGN_IN, payload),
  didSignIn: (payload: IAuthState): SignInAction => createAction(DID_SIGN_IN, payload)
}

// ------------------------------------
// Domain & State
// ------------------------------------
export const initialState: IAuthState = { submitting: false };

// ------------------------------------
// Reducer
// ------------------------------------
export const authReducer = (
  state: IAuthState = initialState,
  action: SignInAction,
): IAuthState => {
  switch (action.type) {
    case SHOULD_SIGN_IN:
      const shouldSignInState = Object.assign({}, state);
      shouldSignInState.submitting = true;
      shouldSignInState.generalErrors = [];
      return shouldSignInState;
    case DID_SIGN_IN:
      const didSignInState = Object.assign({}, state);
      didSignInState.submitting = false;
      didSignInState.token = action.payload.token;
      didSignInState.generalErrors = action.payload.generalErrors;
      return didSignInState;
    default:
      return state;
  }
}
