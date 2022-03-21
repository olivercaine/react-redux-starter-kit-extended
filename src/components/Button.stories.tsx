import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { templateForComponent } from '../../.storybook/helper';
import { Button, IProps } from './Button';

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>;

const template = templateForComponent(Button);

const defaultArgs: IProps = {
  text: 'Button text',
  callback: action('Clicked')
}

export const Default = template({ ...defaultArgs, text: 'Button text override' });
