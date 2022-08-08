import React from 'react'
import { Button } from '../../../ui/basics/Button/Button'

export interface IPropsFromState {
  /**
  The current counter value
  */
  counter: Number
}

export interface IPropsFromDispatch {
  /**
  The callback to synchronously increase the counter value
  */
  onIncrement: () => void
  /**
  The callback to asynchronously increase the counter value
  */
  onDoubleAsync: () => void
}

export interface IProps extends IPropsFromDispatch, IPropsFromState { }

export const Counter = ({ counter, onIncrement, onDoubleAsync }: IProps) =>
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <Button text='Increment' onClick={onIncrement} />
    {' '}
    <button className='btn btn-secondary' onClick={onDoubleAsync}>
      Double (Async)
    </button>
  </div>
