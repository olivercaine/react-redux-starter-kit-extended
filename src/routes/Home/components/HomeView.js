import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { sayWelcome } from '../../Home/components/StringUtil'
import { sayWelcomeClient } from '../../../../../module/lib/add'

export const HomeView = () => (
  <div>
    <h4>{sayWelcome('welcome!')}</h4>
    <h4>{sayWelcomeClient(50)}</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
