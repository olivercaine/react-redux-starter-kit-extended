import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import * as React from 'react';
import CoreLayout from '../../ui/templates/PageLayout';
import { Counter } from './components/Counter';

export default {
  component: Counter,
  title: 'Features/Counter'
} as Meta;

export const Default: React.VFC<{}> = () =>
  <CoreLayout>
    <Counter
      counter={1}
      onIncrement={action('Increment callback')}
      onDoubleAsync={action('DoubleAsync callback')}
    />
  </CoreLayout>
