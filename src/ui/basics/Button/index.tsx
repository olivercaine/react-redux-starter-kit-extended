import React from 'react';
import './Button.scss';

export interface IProps {
  /**
  The onClick callback
  */
  onClick: any
  /**
  Text to be shown in the button
  */
  text: string
}

export const Button = (props: IProps) =>
  <button className='btn btn-primary' onClick={props.onClick}>
    {props.text}
  </button>
