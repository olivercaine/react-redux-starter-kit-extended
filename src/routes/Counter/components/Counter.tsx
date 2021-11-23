import * as React from 'react'
import { Button } from '../../../components/Button'

export const Counter = ({ counter, increment, doubleAsync }) =>
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <Button text='Increment' callback={increment} />
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
