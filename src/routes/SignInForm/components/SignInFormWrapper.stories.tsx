import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { SignInFormWrapper } from './SignInFormWrapper'

// tslint:disable-next-line
const customCallback = () => { console.info('Custom callback') }

storiesOf('SignInFormWrapper', module)
    .add('Default', () => (
        <SignInFormWrapper
            handleFormSubmit={customCallback}
        />
    ))
    .add('With initial values', () => (
        <SignInFormWrapper
            initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
            handleFormSubmit={customCallback}
        />
    ))
    .add('Submitting', () => (
        <SignInFormWrapper
            initialValues={{ email: 'olliecaine@gmail.com', password: 'pass123' }}
            handleFormSubmit={customCallback}
            submitting={true}
        />
    ))
    .add('With errors', () => (
        <SignInFormWrapper
            generalErrors={['Server validation failed']}
            handleFormSubmit={customCallback}
        />
    ))
    .add('With prop', () => (
        <SignInFormWrapper
            customProp='A custom prop'
            generalErrors={['Server validation failed']}
            handleFormSubmit={customCallback}
        />
    ))
