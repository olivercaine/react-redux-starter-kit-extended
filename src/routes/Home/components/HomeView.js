import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { sayWelcome } from '../../Home/components/StringUtil'

export const HomeView = () => (
  <div>
    <h4>{sayWelcome('welcome!')}</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
