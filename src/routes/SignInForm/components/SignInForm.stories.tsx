import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { IProps, SignInForm } from './SignInForm'

export default {
  component: SignInForm,
  title: 'Components/SignInForm',
} as ComponentMeta<typeof SignInForm>

const template = storyTemplate(SignInForm)

const requiredProps: IProps = {
  onSubmit: action('Clicked')
}

export const Default = template({ ...requiredProps })
Default.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement)
  await expect(canvas.getByText('Login attempts: 0')).toBeInTheDocument()
}

export const WithInitialValues = template({
  ...requiredProps,
  initialValues: {
    email: 'olliecaine@gmail.com',
    password: 'mypass'
  }
})

export const WithProp = template({
  ...requiredProps,
  customProp: 'A custom prop'
})
WithProp.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement)
  await waitFor(() => expect(canvas.getByText('A custom prop')).toBeInTheDocument())
}

export const WithGeneralErrors = template({
  ...requiredProps,
  generalErrors: ['Server validation failed']
})
WithProp.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement)
  await waitFor(() => expect(canvas.getByText('Server validation failed')).toBeInTheDocument())
}

export const RequiresEmail = template({ ...requiredProps })
RequiresEmail.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => expect(canvas.getByText('Email is required')).toBeInTheDocument())
}

export const PasswordIsRequired = template({ ...requiredProps })
PasswordIsRequired.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('email'), 'me@mail.com')
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => expect(canvas.getByText('Password is required')).toBeInTheDocument())
}

export const SubmitButtonDisables = template({
  ...requiredProps,
  submitting: true
})
SubmitButtonDisables.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('email'), 'me@email.com')
  await userEvent.type(canvas.getByTestId('password'), 'myMass1*')
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByRole('button')).toHaveProperty('disabled', true)
}
