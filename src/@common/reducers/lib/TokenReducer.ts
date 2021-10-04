// tslint:disable:no-null-keyword
import { IAction, IActionWithPayload } from './ActionCreator';

// ------------------------------------
// Action names
// ------------------------------------
export const DID_GET_TOKEN = 'DID_GET_TOKEN';
export const SHOULD_DELETE_TOKEN = 'SHOULD_DELETE_TOKEN';

// ------------------------------------
// Action definitions
// ------------------------------------
export type TokenAction =
  | IActionWithPayload<typeof DID_GET_TOKEN, string | null>
  | IAction<typeof SHOULD_DELETE_TOKEN>;

// ------------------------------------
// Domain & State
// ------------------------------------
export const initialState: string | null = null;

// ------------------------------------
// Reducer
// ------------------------------------
export function tokenReducer(state: string | null = initialState, action: TokenAction): string | null {
  switch (action.type) {
    case DID_GET_TOKEN:
      return action.payload;
    case SHOULD_DELETE_TOKEN:
      return null;
    default:
      return state;
  }
}
