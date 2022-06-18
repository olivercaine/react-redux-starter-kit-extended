import { Meta } from '@storybook/react';
import React from 'react';
import CoreLayout from '../../ui/templates/PageLayout';
import { HomeView } from './components/HomeView';

export default {
  component: HomeView,
  title: 'Features/Home'
} as Meta;

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <HomeView />
  </CoreLayout>
