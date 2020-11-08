import { FormikActions, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface IFormValues {
  email: string
  password: string
}

export interface IProps {
  initialValues?: IFormValues
  handleFormSubmit(): any // (formvalues: IFormValues)
}

export const SignInForm = (props: IProps & FormikProps<IFormValues>) => (
  <form autoComplete='on' noValidate onSubmit={props.handleSubmit}>

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
      {(props.submitCount || props.touched.password) && props.errors.password}
    </div>

    <br/>

    <input disabled={props.isSubmitting} type='submit' value={!props.isSubmitting ? 'Login' : 'Logging in...'}  />
  </form>
)

// Move to common
const emailValidation = Yup.string()
  .required('Email is required')
  .email('Please enter a valid email address')

const passwordValidation = Yup.string()
  .required('Password is required')
  .min(6, 'Please enter a password which is at least 6 characters');
// END: Move to common

export const SignInFormWrapper = withFormik<IProps, IFormValues>({

  mapPropsToValues: (props: IProps): IFormValues => {
    return props.initialValues || {
      email: '',
      password: '',
    }
  },

  validationSchema: Yup.object().shape<IFormValues>({
    email: emailValidation,
    password: passwordValidation,
  }),

  handleSubmit: (formValues: IFormValues, actions: FormikActions<IFormValues>) => {
    console.log(JSON.stringify(formValues))
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000)
  },

})(SignInForm);
