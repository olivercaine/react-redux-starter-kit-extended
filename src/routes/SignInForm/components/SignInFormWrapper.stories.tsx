import { Meta } from '@storybook/react';
import * as React from 'react';
import { SignInFormWrapper } from './SignInFormWrapper';

export default {
  component: SignInFormWrapper,
  title: 'Components/SignInFormWrapper',
} as Meta;

const customCallback = () => { console.info('Custom callback') }

export const Default: React.VFC<{}> = () => <SignInFormWrapper
  handleFormSubmit={customCallback}
/>;

export const WithInitalValues: React.VFC<{}> = () => <SignInFormWrapper
  initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
  handleFormSubmit={customCallback}
/>;

export const Submitting: React.VFC<{}> = () => <SignInFormWrapper
  initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
  handleFormSubmit={customCallback}
  submitting
/>;

export const WithErrors: React.VFC<{}> = () => <SignInFormWrapper
  generalErrors={['Server validation failed']}
  handleFormSubmit={customCallback}
/>;

export const WithProp: React.VFC<{}> = () => <SignInFormWrapper
  customProp='A custom prop'
  generalErrors={['Server validation failed']}
  handleFormSubmit={customCallback}
/>;
