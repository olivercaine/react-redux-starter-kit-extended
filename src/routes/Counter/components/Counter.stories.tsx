import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Counter, IProps } from './Counter'

export default {
  component: Counter,
  title: 'Components/Counter',
} as ComponentMeta<typeof Counter>

const template = storyTemplate(Counter)

const defaultArgs: IProps = {
  counter: 0,
  onDoubleAsync: action('DoubleAsync callback'),
  onIncrement: action('Increment callback')
}

export const Default = template({ ...defaultArgs })
