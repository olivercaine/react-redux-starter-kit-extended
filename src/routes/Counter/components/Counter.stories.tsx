import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Counter from './Counter';

const customCallback = () => { console.info('Custom callback') }

storiesOf('Counter', module)
    .add('default', () => <Counter counter={5} doubleAsync={customCallback} increment={customCallback} />)
