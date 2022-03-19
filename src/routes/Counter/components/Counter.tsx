import * as React from 'react'
import { Button } from '../../../components/Button'

export interface IProps {
  counter: string
  increment: () => void
  doubleAsync: () => void
}

export const Counter = (props: IProps) =>
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <Button text='Increment' callback={props.increment} />
    {' '}
    <button className='btn btn-secondary' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
