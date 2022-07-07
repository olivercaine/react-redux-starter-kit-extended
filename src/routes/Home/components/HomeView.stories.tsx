import { Meta } from '@storybook/react'
import React from 'react'
import { HomeView } from './HomeView'

export default {
  component: HomeView,
  title: 'Components/HomeView',
} as Meta

export const Default: React.VFC<{}> = () => <HomeView />
