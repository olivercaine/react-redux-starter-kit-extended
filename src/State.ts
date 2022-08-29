import { initialState as initialCounterState } from 'routes/Counter/modules/counter'
import { IRootState } from './Definitions'

export const initialRootState: IRootState = { // TODO: move intial state to reducer level
  counter: initialCounterState,
}
