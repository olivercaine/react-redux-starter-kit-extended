import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { Button, IProps } from '.';
import { componentTemplate } from '../../../../.storybook/helper';

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>;

const template = componentTemplate(Button);

const defaultArgs: IProps = {
  text: 'Button text',
  onClick: action('Clicked')
}

export const Default = template({ ...defaultArgs, text: 'Button text override' });
