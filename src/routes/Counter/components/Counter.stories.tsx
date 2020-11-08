import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Counter from './Counter';

// tslint:disable-next-line
const customCallback = () => { console.info('Custom callback') }

storiesOf('Counter', module)
    .add('default', () => <Counter counter={5} doubleAsync={customCallback} increment={customCallback} />)
