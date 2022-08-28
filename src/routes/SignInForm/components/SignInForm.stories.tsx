import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
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

export const WithInitialValues = template({
  ...requiredProps,
  initialValues: {
    email: 'olliecaine@gmail.com',
  }
})

export const WithProp = template({
  ...requiredProps,
  customProp: 'A custom prop'
})

export const WithGeneralErrors = template({
  ...requiredProps,
  generalErrors: ['Server validation failed']
})

export const RequiresEmail = template({ ...requiredProps })
RequiresEmail.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  // await expect(canvas.getByText('Email is required')).toBeInTheDocument();
}

export const PasswordIsRequired = template({ ...requiredProps })
PasswordIsRequired.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('email'), 'me@mail.com')
  await userEvent.click(canvas.getByRole('button'))
  // await expect(canvas.getByText('Password is required')).toBeInTheDocument();
}

export const Submitting = template({
  ...requiredProps,
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
  // await expect(canvas.getByText('Password needs at least one uppercase letter')).toBeInTheDocument();
}
