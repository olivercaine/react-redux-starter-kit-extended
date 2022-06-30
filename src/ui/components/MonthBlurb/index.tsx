import React from 'react';

export interface IProps {
  month: string
}

export const MonthBlurb = ({ month }: IProps) => <span>The current month is {month} according to TypeScript</span>
