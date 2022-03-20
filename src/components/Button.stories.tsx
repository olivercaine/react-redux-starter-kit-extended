import { Meta } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Basics/Button',
} as Meta;

const customCallback = () => { console.info('Custom callback') }

export const Default: React.VFC<{}> = () => <Button wrong='true' text='Sample text' callback={customCallback} />;
