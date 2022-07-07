import { ComponentMeta } from '@storybook/react'
import { IProps, MonthBlurb } from '.'
import { storyTemplate } from '../../../../.storybook/helpers'

export default {
  component: MonthBlurb,
  title: 'Components/MonthBlurb',
} as ComponentMeta<typeof MonthBlurb>

const template = storyTemplate(MonthBlurb)

const defaultArgs: IProps = {
  month: 'Nov'
}

export const Default = template({ ...defaultArgs })

export const Jan = template({ ...defaultArgs, month: 'Jan' })
