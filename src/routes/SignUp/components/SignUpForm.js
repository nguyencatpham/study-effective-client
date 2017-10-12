import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {Field, reduxForm} from 'redux-form'
import messages from '../../../i18n/base-en'
import './SignUpForm.scss'

const validate = (values, state) => {
  const { formatMessage } = state.intl
  const errors = {}
  let userName = values.userName
  let password = values.password
  let confirmPassword = values.confirmPassword
  if (!userName) {
    errors.userName = formatMessage(messages.required)
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userName)) {
    errors.userName = formatMessage(messages.invalidEmail)
  }

  if (!password) {
    errors.password = formatMessage(messages.required)
  } else if (password.length < 6 || !/^(?=.*[A-Z])/.test(password)) {
    errors.password = (<p dangerouslySetInnerHTML={{__html: formatMessage(messages.invalidPassword)}} />)
  }

  if (!confirmPassword) {
    errors.confirmPassword = formatMessage(messages.required)
  } else if (confirmPassword.length < 6 || !/^(?=.*[A-Z])/.test(confirmPassword)) {
    errors.confirmPassword = (<p dangerouslySetInnerHTML={{__html: formatMessage(messages.invalidPassword)}} />)
  } else if (password != confirmPassword) {
    errors.confirmPassword = formatMessage(messages.passwordAndConfirmPasswordNotMatch)
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

class SignUpForm extends Component {
  renderField = ({input, type, placeholder, meta: {touched, error, warning, pristine}}) => (
    <fieldset>
      <input {...input} type={type} placeholder={placeholder} style={{width: '100%'}} />
      {touched && ((error && <div className='error-text text-left'>{error}</div>) || (warning &&
      <div className='warning'>{warning}</div>))}
    </fieldset>
  );

  // redux form
  render () {
    const {intl, handleSubmit, signUp, pristine, reset, submitting} = this.props
    let signUpFailedMessage = !pristine && signUp.signUpErrorMessage ? (
      <label className='error-text' style={{textAlign: 'center'}}>{signUp.signUpErrorMessage}</label>) : ''
    return (
      <form className='new_user ng-pristine ng-valid' onSubmit={handleSubmit}>
        <Field name='userName' type='email' component={this.renderField}
          placeholder={intl.formatMessage(messages.signUp_Email_PlaceHolder)} />

        <Field name='password' type='password' component={this.renderField}
          placeholder={intl.formatMessage(messages.signUp_Password_PlaceHolder)} />

        <Field name='confirmPassword' type='password' component={this.renderField}
          placeholder={intl.formatMessage(messages.signUp_ConfirmPasssword_PlaceHolder)} />

        <div style={{paddingBottom: '15px'}}>{signUpFailedMessage}</div>

        <button type='submit' name='commit' id='signup_button'
          className='large orange button sign-up-button' data-disable-with='Creating Account...' disabled={signUp.isRunning}>
          {intl.formatMessage(messages.register)}
        </button>

        <p className='tos'>{intl.formatMessage(messages.signUp_HaveAccount)}
          <Link to='/signin'>{intl.formatMessage(messages.login)}</Link>
        </p>

      </form>
    )
  }
}

// Decorate the form component
SignUpForm = reduxForm({
  form: 'SignUpForm', // a unique name for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SignUpForm)

export default SignUpForm

// Contain at from 6 to 16 characters.<br/>
// Contain at least 1 number.<br/>
// Contain at least 1 lowercase character.<br/>
// Contain at least 1 uppercase character.<br/>
// Contain at least 1 special character !@#$%^&*
