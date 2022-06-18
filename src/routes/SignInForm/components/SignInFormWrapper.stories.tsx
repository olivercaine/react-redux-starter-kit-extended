import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import * as React from 'react';
import { SignInFormWrapper } from './SignInFormWrapper';

export default {
  component: SignInFormWrapper,
  title: 'Components/SignInFormWrapper',
} as Meta;

const handleFormSubmit = action('handleFormSubmit callback')

export const Default: React.VFC<{}> = () => <SignInFormWrapper
  onSubmit={action('handleFormSubmit callback')}
/>;

export const WithInitalValues: React.VFC<{}> = () => <SignInFormWrapper
  initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
  onSubmit={handleFormSubmit}
/>;

export const Submitting: React.VFC<{}> = () => <SignInFormWrapper
  initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
  onSubmit={handleFormSubmit}
  submitting
/>;

export const WithErrors: React.VFC<{}> = () => <SignInFormWrapper
  generalErrors={['Server validation failed']}
  onSubmit={handleFormSubmit}
/>;

export const WithProp: React.VFC<{}> = () => <SignInFormWrapper
  customProp='A custom prop'
  generalErrors={['Server validation failed']}
  onSubmit={handleFormSubmit}
/>;
