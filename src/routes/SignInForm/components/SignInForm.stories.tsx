import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { IProps, SignInForm } from './SignInForm'

export default {
  component: SignInForm,
  title: 'Components/SignInForm',
} as ComponentMeta<typeof SignInForm>

const template = storyTemplate(SignInForm)

const defaultArgs: IProps = {
  onSubmit: action('Clicked')
}

export const Default = template({ ...defaultArgs })

export const WithInitialValues = template({
  ...defaultArgs,
  initialValues: {
    email: 'olliecaine@gmail.com',
    password: 'pass123'
  }
})

export const WithProp = template({
  ...defaultArgs,
  customProp: 'A custom prop'
})

export const WithGeneralErrors = template({
  ...defaultArgs,
  generalErrors: ['Server validation failed']
})

export const RequiresEmail = template({ ...defaultArgs })
RequiresEmail.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('Email is required')).toBeInTheDocument()
}

export const PasswordIsRequired = template({ ...defaultArgs })
PasswordIsRequired.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('email'), 'me@mail.com')
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('Password is required!')).toBeInTheDocument()
}

export const Submitting = template({
  ...defaultArgs,
  initialValues: {
    email: 'olliecaine@gmail.com',
    password: 'pass123'
  },
  submitting: true
})
Submitting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('email'), 'michael@chromatic.com')
  await userEvent.type(canvas.getByTestId('password'), 'pass')
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('Password needs at least one uppercase letter')).toBeInTheDocument()
}
