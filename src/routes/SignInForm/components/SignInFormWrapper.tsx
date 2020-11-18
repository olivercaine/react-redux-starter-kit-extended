import { FormikBag, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { emailValidation, passwordValidation } from '../../../utils/YupValidation';

export interface IState { // (form values)
  email: string
  password: string
}

export interface IPropsFromState {
  initialValues?: IState
  customProp?: string
  submitting?: boolean
  generalErrors?: string[]
}

export interface IPropsFromDispatch {
  handleFormSubmit(formValues: IState): any
}

interface IProps extends IPropsFromDispatch, IPropsFromState { }

export const SignInFormWrapper = withFormik<IProps, IState>({

  // Set up form
  mapPropsToValues: (props: IPropsFromState): IState => {
    return props.initialValues || {
      email: '',
      password: '',
    }
  },

  validationSchema: Yup.object().shape<IState>({
    email: emailValidation,
    password: passwordValidation,
  }),

  handleSubmit: (formValues: IState, formikBag: FormikBag<IProps, IState>) => {
    formikBag.props.handleFormSubmit(formValues);
  },
  // END: Set up form

})((props: IProps & FormikProps<IState>) => (

  <form autoComplete='on' noValidate onSubmit={props.handleSubmit}>

    {props.customProp && <h2>{props.customProp}</h2>}

    {!!props.generalErrors && <ul>{props.generalErrors.map((generalError, i) => <li key={i}>{generalError}</li>)}</ul>}

    <div>
      <label htmlFor='email'>Email</label>
      <input
        autoFocus
        name='email'
        type='email'
        onBlur={props.handleBlur}
        onChange={props.handleChange}
        placeholder='yourname@email.com'
        required
        value={props.values.email}
      />
      <br />
      {(props.submitCount || props.touched.email) && props.errors.email}
    </div>

    <br />

    <div>
      <label htmlFor='password'>Password</label>
      <input
        name='password'
        type='password'
        placeholder='password'
        onBlur={props.handleBlur}
        onChange={props.handleChange}
        required
        value={props.values.password}
        />
      <br />
      {(props.submitCount || props.touched.password) && props.errors.password}
    </div>

    <br/>

    <input disabled={props.submitting} type='submit' value={!props.submitting ? 'Login' : 'Logging in...'}  />
  </form>

));
