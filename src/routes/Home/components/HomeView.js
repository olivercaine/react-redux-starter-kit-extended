import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Months } from '@common/month-enum-ts/lib/Months'
import { MonthBlurb } from '../../../components/MonthBlurb'

export const HomeView = () => (
  <div>
    <MonthBlurb month={Months[new Date().getMonth()]} />
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
