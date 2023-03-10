// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------

import React, { FC, MouseEventHandler } from 'react'

export interface IProps {
    /**
    The callback when the button is clicked
    */
    onClick: MouseEventHandler<HTMLButtonElement>
    /**
    Text to be shown in the button
    */
    text?: string
}

export const Component: FC<IProps> = ({ onClick, text = 'Default button text' }: IProps) =>
    <button className='btn btn-primary' onClick={onClick}>
        {text}
    </button>

// ----------------------------------------------------------------------
// Story
// ----------------------------------------------------------------------

import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../.storybook/helper'

export default {
    component: Component,
    title: 'Basics/Component',
} as ComponentMeta<typeof Component>

const template = storyTemplate(Component)

const defaultArgs: IProps = {
    text: 'Button text',
    onClick: action('Clicked')
}

export const Default = template({ ...defaultArgs, text: 'Button text override' })
