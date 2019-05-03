import * as React from 'react';

interface IProps {
    month: string
}

export const MonthBlurb = ({month}: IProps) => (
    <h4>The month is {month} according to TypeScript</h4>
)
