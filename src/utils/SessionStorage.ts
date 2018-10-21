import { IGlobalState } from 'Definitions';

const GLOBAL_STATE = 'GLOBAL_STATE'

export const saveState = (state: IGlobalState) => {
  sessionStorage.setItem(GLOBAL_STATE, JSON.stringify(state))
}

export const loadState = (): IGlobalState => {
  const state = sessionStorage.getItem(GLOBAL_STATE)
  return state === null ? null : JSON.parse(state)
}

export const clearState = (): void => {
  sessionStorage.clear();
}
