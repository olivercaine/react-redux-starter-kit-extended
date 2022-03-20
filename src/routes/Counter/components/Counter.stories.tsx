import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import * as React from 'react';
import { Counter } from './Counter';

export default {
  component: Counter,
  title: 'Components/Counter',
} as Meta;

export const Default: React.VFC<{}> = () =>
  <Counter counter={5} doubleAsync={action("DoubleAsync callback")} increment={action("Increment callback")} />;
