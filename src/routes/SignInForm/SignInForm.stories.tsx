import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../.storybook/helpers'
import { PageLayout } from '../../ui/templates/PageLayout'
import { IProps, SignInForm } from './components/SignInForm'

export default {
  component: SignInForm,
  title: 'Features/SignIn',
  decorators: [(Story) => (<PageLayout><Story /></PageLayout>)]
} as Meta

const template = storyTemplate(SignInForm)

const requiredProps: IProps = {
  onSubmit: action('Clicked')
}

export const Default = template({ ...requiredProps })
