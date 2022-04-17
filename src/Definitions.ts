import { IAuthState } from './reducers/AuthReducer';
// As definitions are likely to change during the early stages of development it's recommended to keep all
// all definitions - models, interfaces etc - into this file until it gets too big to manage.

export interface IRootState {
  counter: ICounter;
  signInForm: IAuthState
  // canonicalData: ICanonicalData;
}

// export interface ICanonicalData {
//   normalizedEntities: []
// }

export interface ICounter extends Number {}
