import { FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import { emailValidation, passwordValidation } from '../../../utils/YupValidation';

export interface IProps {
  initialValues?: IFormValues
  submitting?: boolean
  generalErrors?: string[]
  customProp?: string
  handleFormSubmit(formValues: IFormValues): any
}

export interface IFormValues {
  email: string
  password: string
}

export const SignInFormWrapper = withFormik<IProps, IFormValues>({

  mapPropsToValues: (props: IProps) => {
    return props.initialValues || {
      email: '',
      errors: props.generalErrors,
      password: '',
    }
  },

  validationSchema: Yup.object().shape<IFormValues>({
    email: emailValidation,
    password: passwordValidation,
  }),

  handleSubmit: (formValues: IFormValues, { props, setSubmitting, setErrors }) => { // actions: FormikActions<any> or actions: FormikActions<IProps>
    props.handleFormSubmit(formValues);
  },

})((props: IProps & FormikProps<IFormValues>) => (

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
