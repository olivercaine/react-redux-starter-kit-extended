import * as React from 'react';

export interface IProps {
  /**
  The onClick callback
  */
  callback: any
  /**
  Text to be shown in the button
  */
  text: string
}

export const Button = (props: IProps) =>
  <button className='btn btn-primary' onClick={props.callback}>
    {props.text}
  </button>
