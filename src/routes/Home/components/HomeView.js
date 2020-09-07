import { Months } from '@common/month-enum-ts/lib/Months'
import React from 'react'
import { MonthBlurb } from '../../../components/MonthBlurb'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4><MonthBlurb month={Months[new Date().getMonth()]} /></h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
