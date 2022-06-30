import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { Button, IProps } from '.';
import { storyTemplate } from '../../../../.storybook/helpers';

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>;

const template = storyTemplate(Button);

const defaultArgs: IProps = {
  text: 'Button text',
  onClick: action('Clicked')
}

export const Default = template({ ...defaultArgs, text: 'Button text override' });
