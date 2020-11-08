import * as React from 'react';

export interface IProps {
  email?: string
  password?: string
  twoFactorAuth?: string
}

export const Form = (props: IProps) => (
  <form>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' placeholder='yourname@email.com' value={props.email} required />

    <br />

    <label htmlFor='password'>Password</label>
    <input autoFocus type='password' name='password' placeholder='password' required></input>

    <br/>

    <label htmlFor='twoFactorAuth'>2FA</label>
    <input type='number' name='twoFactorAuth' placeholder='2FA code' required></input>

    <br/>

    <input type='submit' value='Login' />
  </form>
)
