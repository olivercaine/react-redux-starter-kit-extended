import { IRootState } from './Definitions';

export const initialRootState: IRootState = {
  counter: 10,
  signInForm: {
    generalErrors: [],
    submitting: false,
  },
}
