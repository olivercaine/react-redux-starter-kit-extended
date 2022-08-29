import React from 'react'

export interface IProps {
  /**
  The month to show in the component, e.g. 'Jan'
  */
  month: string
}

export const MonthBlurb = ({ month }: IProps): JSX.Element =>
  <span>The current month is {month} according to TypeScript</span>
