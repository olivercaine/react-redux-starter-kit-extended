import { IRootState } from 'Definitions';

const GLOBAL_STATE = 'GLOBAL_STATE'

export const saveState = (state: IRootState) => {
  sessionStorage.setItem(GLOBAL_STATE, JSON.stringify(state))
}

export const loadState = (): IRootState => {
  const state = sessionStorage.getItem(GLOBAL_STATE)
  // tslint:disable-next-line
  return state === null ? null : JSON.parse(state)
}

export const clearState = (): void => {
  sessionStorage.clear();
}
