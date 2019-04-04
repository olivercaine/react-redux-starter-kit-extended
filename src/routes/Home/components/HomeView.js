import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Months } from '@common/month-enum-ts/lib/Months'

export const HomeView = () => (
  <div>
    <h4>The month is {Months[new Date().getMonth()]} according to TypeScript</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
