import { ISignInState } from './reducers/SignInReducer';
// As definitions are likely to change during the early stages of development it's recommended to keep all
// all definitions - models, interfaces etc - into this file until it gets too big to manage.

export interface IRootState {
  counter: ICounter;
  signInForm: ISignInState
  // canonicalData: ICanonicalData;
}

// export interface ICanonicalData {
//   normalizedEntities: []
// }

// tslint:disable-next-line
export interface ICounter extends Number {}
