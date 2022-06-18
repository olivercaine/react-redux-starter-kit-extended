import * as React from 'react'
import { Button } from '../../../ui/basics/Button'

export interface IProps {
  /**
  The current counter value
  */
  counter: number
  /**
  The callback to synchronously increase the counter value
  */
  onIncrement: () => void
  /**
  The callback to asynchronously increase the counter value
  */
  onDoubleAsync: () => void
}

export const Counter = (props: IProps) =>
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <Button text='Increment' onClick={props.onIncrement} />
    {' '}
    <button className='btn btn-secondary' onClick={props.onDoubleAsync}>
      Double (Async)
    </button>
  </div>
