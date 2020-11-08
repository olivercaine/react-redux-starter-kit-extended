import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { SignInFormWrapper } from './SignInForm'

// tslint:disable-next-line
const customCallback = () => { console.info('Custom callback') }

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
