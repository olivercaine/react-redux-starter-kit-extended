import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Button, IProps } from './Button'

export default {
  component: Button,
  title: 'Basics/Button',
} as ComponentMeta<typeof Button>

const template = storyTemplate(Button)

const requiredProps: IProps = {
  onClick: action('Clicked')
}

export const Default = template({ ...requiredProps })

export const ButtonTextOverride = template({ ...requiredProps, text: 'Button text override' })
