import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Basics/Button',
} as Meta;

export const Default: React.VFC<{}> = () => <Button text='Sample text' callback={action('Clicked')} />;
