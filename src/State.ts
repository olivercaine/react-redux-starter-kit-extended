import { IRootState } from './Definitions'

export const initialRootState: IRootState = { // TODO: move intial state to reducer level
  counter: 10,
  signInForm: {
    token: undefined,
    generalErrors: [],
    submitting: false,
  },
}
