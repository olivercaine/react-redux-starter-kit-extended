import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import { storyTemplate } from '../../../.storybook/helpers';
import PageLayout from '../../ui/templates/PageLayout';
import { Counter, IProps } from './components/Counter';

export default {
  component: Counter,
  title: 'Features/Counter',
  decorators: [(Story) => (<PageLayout><Story /></PageLayout>)]
} as Meta;

const template = storyTemplate(Counter)

const defaultArgs: IProps = {
  counter: 1,
  onIncrement: action('Increment callback'),
  onDoubleAsync: action('DoubleAsync callback')
}

export const Default = template({ ...defaultArgs });

