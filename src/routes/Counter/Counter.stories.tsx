import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import * as React from 'react';
import CoreLayout from '../../layouts/PageLayout/PageLayout';
import { Counter } from './components/Counter';

export default {
  component: Counter,
  title: 'Features/Counter'
} as Meta;

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <Counter
      counter={1}
      increment={action("Increment callback")}
      doubleAsync={action("DoubleAsync callback")}
    />
  </CoreLayout>
