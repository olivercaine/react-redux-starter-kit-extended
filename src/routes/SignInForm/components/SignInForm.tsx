import { emailValidation, passwordValidation } from '@common/validation/lib/index';
import { FormikActions, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface IFormValues {
  email: string
  password: string
}

export interface IProps {
  initialValues?: IFormValues
  handleFormSubmit(formValues: IFormValues): any
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
