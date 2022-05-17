import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { componentTemplate } from '../../.storybook/helper';
import { Button, IProps } from './Button';

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>;

const template = componentTemplate(Button);

const defaultArgs: IProps = {
  text: 'Button text',
  callback: action('Clicked')
}

export const Default = template({ ...defaultArgs, text: 'Button text override' });
