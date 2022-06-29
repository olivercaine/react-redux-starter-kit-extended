import { Meta } from '@storybook/react';
import React from 'react';
import CoreLayout from '../../ui/templates/PageLayout';
import { SignInForm } from './components/SignInForm';

export default {
  component: SignInForm,
  title: 'Features/SignIn'
} as Meta;

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <SignInForm
      onSubmit={() => { console.info('Custom callback') }}
    />
  </CoreLayout>
