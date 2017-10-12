import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import messages from '../../../i18n/base-en'
import './UserInfoForm.scss'

const validate = values => {
  const errors = {}
  // let userName = values.userName;
  // let firstName = values.firstName;
  // let lastName = values.lastName;
  // if (!userName) {
  //  errors.username = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userName)) {
  //  errors.userName = 'Invalid email address';
  // }
  //
  // if (!firstName) {
  //  errors.firstName = 'Required';
  // }
  //
  // if (!lastName) {
  //  errors.lastName = 'Required';
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

class UserInfoForm extends Component {

  renderField = ({input, label, type, placeholder, required, allowEdit, meta: {touched, error, warning, pristine}}) => (
    <fieldset className='field wide'>
      <label>{label}</label><br />
      <input {...input} type={type} placeholder={placeholder} disabled={!allowEdit} />
      {touched && ((error && <div className='error-text'>{error}</div>) || (warning &&
      <div className='text-warning'>{warning}</div>))}
    </fieldset>
  );

  // redux form
  render () {
    const {intl, handleSubmit, userProfile, pristine, reset, submitting} = this.props
    let userInfoFailedMessage = !pristine && userProfile.userInfoErrorMessage ? (
      <label className='error-text' style={{textAlign: 'center'}}>{userProfile.userInfoErrorMessage}</label>) : ''
    return (
      <form className='edit_user'
        acceptCharset='UTF-8' onSubmit={handleSubmit}>
        <h4 className='form-title'>{intl.formatMessage(messages.userProfile_UserInfo_Title)}</h4>

        <div className='form-body'>
          <div>

            <Field name='userName' type='email' component={this.renderField} label={intl.formatMessage(messages.userProfile_UserInfo_Email)} allowEdit={false}
              placeholder='Enter email address' />

            <Field name='firstName' type='text' component={this.renderField} label={intl.formatMessage(messages.userProfile_UserInfo_FirstName)} allowEdit
              placeholder={intl.formatMessage(messages.userProfile_UserInfo_FirstName_PlaceHolder)} />

            <Field name='lastName' type='text' component={this.renderField} label={intl.formatMessage(messages.userProfile_UserInfo_LastName)} allowEdit
              placeholder={intl.formatMessage(messages.userProfile_UserInfo_LastName_PlaceHolder)} />

            <Field name='phoneNumber' type='text' component={this.renderField} label={intl.formatMessage(messages.userProfile_UserInfo_PhoneNumber)} allowEdit
              placeholder={intl.formatMessage(messages.userProfile_UserInfo_PhoneNumber_PlaceHolder)} />

          </div>

          <div>{userInfoFailedMessage}</div>

          {/* <div className="field">*/}
          {/* <label>Privacy Controls</label>*/}
          {/* <br/>*/}
          {/* <label htmlFor="user_privacy_show_avatar">Use your full name and avatar on chef reviews</label>*/}
          {/* </div>*/}

          <div className='form-buttons'>
            <button type='submit' className='large orange button'
              data-disable-with='Updating Profile...' disabled={userProfile.isRunning}>{intl.formatMessage(messages.userProfile_UserInfo_UpdateProfile)}
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapFormToProps = {
  form: 'UserInfoForm',     // a unique name for this form
  validate,                 // <--- validation function given to redux-form
  warn,                     // <--- warning function given to redux-form,
  enableReinitialize: true // when async init data from remote, we have to enableReinitialize --> to redux form set value for field
}

// Decorate the form component
UserInfoForm = reduxForm(
  mapFormToProps
)(UserInfoForm)

UserInfoForm = connect(
  (state, props) => {
    return {
      initialValues: {
        userName: state.userProfile.userData.email,
        firstName: state.userProfile.userData.firstName,
        lastName: state.userProfile.userData.lastName,
        phoneNumber: state.userProfile.userData.phoneNumber
      } // pull initial values from account reducer
    }
  }
)(UserInfoForm)

export default UserInfoForm
