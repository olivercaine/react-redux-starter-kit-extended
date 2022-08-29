import { Meta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../.storybook/helpers'
import { PageLayout } from '../../ui/templates/PageLayout'
import { HomeView } from './components/HomeView'

export default {
  component: HomeView,
  title: 'Features/Home',
  decorators: [(Story) => (<PageLayout><Story /></PageLayout>)]
} as Meta

const template = storyTemplate(HomeView)

export const Default = template(undefined)
