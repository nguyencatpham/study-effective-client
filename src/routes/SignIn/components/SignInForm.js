import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import messages from '../../../i18n/base-en'
import './SignInForm.scss'

const validate = (values, state) => {
  const { formatMessage } = state.intl
  const errors = {}
  // let username = values.get('username');
  let userName = values.userName
  // let password = values.get('password');
  let password = values.password
  if (!userName) {
    errors.userName = formatMessage(messages.required)
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userName)) {
    errors.userName = formatMessage(messages.invalidEmail)
  }

  if (!password) {
    errors.password = formatMessage(messages.required)
  }
  // else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
  //  errors.password = 'Invalid email password';
  // }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

class SignInForm extends Component {

  // renderField = ({ input, label, type, placeholder, meta: { touched, error, warning, pristine } }) => (
  //  <fieldset className="form-group">
  //    <label>{label}</label>
  //    <input {...input} type={type} placeholder={placeholder}
  //                      className={'form-control form-control-lg' + ((touched && error) || (!pristine && error) ? ' error' : !pristine ? ' valid' : '')}/>
  //    {touched && ((error && <label className="error">{error}</label>) || (warning &&
  //    <span className='text-warning'>{warning}</span>))}
  //  </fieldset>
  // );

  renderField = ({ input, type, placeholder, meta: { touched, error, warning, pristine } }) => (
    <fieldset className='field'>
      <input {...input} type={type} placeholder={placeholder} />
      {touched && ((error && <div className='error-text text-left'>{error}</div>) || (warning &&
        <div className='warning'>{warning}</div>))}
    </fieldset>
  );

  // redux form
  render () {
    const { intl, handleSubmit, signIn, pristine, reset, submitting } = this.props
    let signInFailedMessage = !pristine && signIn.signInErrorMessage ? (
      <label className='error-text' style={{ textAlign: 'center' }}>{signIn.signInErrorMessage}</label>) : ''
    return (
      <form className='new_user ng-pristine ng-valid' onSubmit={handleSubmit}>

        <Field name='userName' type='email' component={this.renderField}
          placeholder={intl.formatMessage(messages.signIn_Email_PlaceHolder)} />

        <Field name='password' type='password' component={this.renderField}
          placeholder={intl.formatMessage(messages.signIn_Password_PlaceHolder)} />

        <div className='forgot-password-mobile'>
          <Link to={intl.formatMessage(messages.route_forgot_password)} className='secondary'>{intl.formatMessage(messages.signIn_ForgotPassword)}</Link>
        </div>

        <div>{signInFailedMessage}</div>

        <div className='field'>
          <button type='submit' name='commit' className='orange button' disabled={signIn.isRunning}>{intl.formatMessage(messages.login)}</button>
        </div>

        <div className='forgot-password'>
          <Link to={intl.formatMessage(messages.route_forgot_password)} className='secondary'>{intl.formatMessage(messages.signIn_ForgotPassword)}</Link>
        </div>

        <input value='true' type='hidden' name='user[remember_me]' id='user_remember_me' />
      </form>
    )
  }
}

// Decorate the form component
SignInForm = reduxForm({
  form: 'SignIn', // a unique name for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SignInForm)

export default SignInForm
