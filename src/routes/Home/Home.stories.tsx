import { Meta } from '@storybook/react';
import * as React from 'react';
import CoreLayout from '../../layouts/PageLayout/PageLayout';
import { HomeView } from './components/HomeView';

export default {
  component: HomeView,
  title: 'Features/Home'
} as Meta;

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <HomeView />
  </CoreLayout>
