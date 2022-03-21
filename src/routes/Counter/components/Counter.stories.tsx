import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { templateForComponent } from '../../../../.storybook/helper';
import { Counter, IProps } from './Counter';

export default {
  component: Counter,
  title: 'Components/Counter',
} as ComponentMeta<typeof Counter>;

const template = templateForComponent(Counter);

const defaultArgs: IProps = {
  counter: 0,
  doubleAsync: action('DoubleAsync callback'),
  increment: action('Increment callback')
}

export const Default = template({ ...defaultArgs });
