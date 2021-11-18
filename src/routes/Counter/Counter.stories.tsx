import { Meta } from '@storybook/react';
import * as React from 'react';
import CoreLayout from '../../layouts/PageLayout/PageLayout';
import { Counter } from './components/Counter';

export default {
  component: Counter,
  title: 'Features/Counter'
} as Meta;

const customCallback = () => { console.info('Custom callback') }

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <Counter
      counter={1}
      increment={customCallback}
      doubleAsync={customCallback}
    />
  </CoreLayout>