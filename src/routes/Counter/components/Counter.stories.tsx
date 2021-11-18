import { Meta } from '@storybook/react';
import * as React from 'react';
import { Counter } from './Counter';

export default {
    component: Counter,
    title: 'Components/Counter',
} as Meta;

const customCallback = () => { console.info('Custom callback') }

export const Default: React.VFC<{}> = () => <Counter counter={5} doubleAsync={customCallback} increment={customCallback} />;