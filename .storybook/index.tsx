import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Counter from '../src/routes/Counter/components/Counter'
import HomeView from '../src/routes/Home/components/HomeView'
import { SignInFormWrapper } from '../src/routes/SignInForm/components/SignInForm'

// tslint:disable-next-line
const customCallback = () => { console.info('Custom callback') }

storiesOf('Counter', module)
    .add('default', () => <Counter counter={5} doubleAsync={customCallback} increment={customCallback} />)

storiesOf('HomeView', module)
    .add('default', () => <HomeView />)

storiesOf('SignInFormWrapper', module)
    .add('Default', () => (
        <SignInFormWrapper
            handleFormSubmit={customCallback}
        />
    ))
    // .add('With initial values', () => (
    //     <SignInFormWrapper
    //         initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
    //         handleFormSubmit={customCallback}
    //     />
    // ))
