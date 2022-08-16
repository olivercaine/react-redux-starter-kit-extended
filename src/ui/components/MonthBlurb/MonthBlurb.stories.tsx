import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { IProps, MonthBlurb } from './MonthBlurb'

export default {
  component: MonthBlurb,
  title: 'Components/MonthBlurb',
} as ComponentMeta<typeof MonthBlurb>

const template = storyTemplate(MonthBlurb)

const requiredProps: IProps = {
  month: 'Jan'
}

export const Default = template({ ...requiredProps })

export const MonthOverride = template({ ...requiredProps, month: 'Nov' })
