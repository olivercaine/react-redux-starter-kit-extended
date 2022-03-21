import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button, IProps } from './Button';

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IProps) => <Button {...args} />;

const defaultArgs: IProps = {
  text: 'Button text',
  callback: action('Clicked')
}

export const Basic = Template.bind({});
Basic.args = { ...defaultArgs, text: 'Button text override' }