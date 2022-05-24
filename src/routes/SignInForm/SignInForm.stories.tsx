import { Meta } from '@storybook/react';
import * as React from 'react';
import CoreLayout from '../../ui/templates/PageLayout';
import { SignInFormWrapper } from './components/SignInFormWrapper';

export default {
  component: SignInFormWrapper,
  title: 'Features/SignIn'
} as Meta;

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <SignInFormWrapper
      handleFormSubmit={() => { console.info('Custom callback') }}
    />
  </CoreLayout>
