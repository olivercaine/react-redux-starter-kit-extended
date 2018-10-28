import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Counter from '../src/routes/Counter/components/Counter'
import HomeView from '../src/routes/Home/components/HomeView'

// tslint:disable-next-line
const customCallback = () => { console.info('Custom callback') }

storiesOf('Counter', module)
    .add('default', () => <Counter counter={5} doubleAsync={customCallback} increment={customCallback} />)

storiesOf('HomeView', module)
    .add('default', () => <HomeView />)
