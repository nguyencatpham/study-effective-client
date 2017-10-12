import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from './SignUpForm'
import { IndexLink, Link } from 'react-router'
import { FormattedHTMLMessage } from 'react-intl'
import messages from '../../../i18n/base-en'
import '../assets/style.scss'
import Seo from '../../../components/Seo/Seo'
import Facebook from '../../../components/SocialLogin/Facebook'
import Google from '../../../components/SocialLogin/Google'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    // this.props.signUp(user);
    this.props.signUp(user)
  };

  render () {
    return (
      <div className='fluid-container'>
        <Seo title={this.context.intl.formatMessage(messages.register)} />
        <div className='row center-x'>
          <div className='signup-stage phone-col-12 tablet-col-12 desktop-col-10'>
            <div className='signup-view'>
              <div className='signup-content'>

                <div className='signup-content-section large'>
                  <div className='facebook-sign-up'>
                    {/* <button id='facebook_signup_button' className='facebook button large'>{this.context.intl.formatMessage(messages.signUp_Facebook)}</button> */}
                    <Facebook text={this.context.intl.formatMessage(messages.signUp_Facebook)} />
                    <p>{this.context.intl.formatMessage(messages.signUp_Facebook_Description)}</p>
                  </div>
                  <div className='facebook-sign-up'>
                    {/* <button id='facebook_signup_button' className='facebook button large'>{this.context.intl.formatMessage(messages.signUp_Facebook)}</button> */}
                    <Google text={this.context.intl.formatMessage(messages.social_gg_login_button)} />
                    <p>{this.context.intl.formatMessage(messages.signUp_Facebook_Description)}</p>
                  </div>
                  <div className='divider'>{this.context.intl.formatMessage(messages.or)}</div>

                  {/* <form className="new_user ng-pristine ng-valid">*/}
                  {/* <div>*/}
                  {/* <input placeholder="Email" autoComplete="off" type="email" name="user[email]" id="user_email"/>*/}
                  {/* <div id="email-suggestion" className="email-suggestion"></div>*/}

                  {/* <div className="password-label-container">*/}
                  {/* <label>Password (minimum 8 characters)</label>*/}
                  {/* </div>*/}
                  {/* <input className="strong-password" autoComplete="off"*/}
                  {/* placeholder="Password (minimum 8 characters)" type="password" name="user[password]"*/}
                  {/* id="user_password"/>*/}

                  {/* </div>*/}

                  {/* <input type="submit" name="commit" value="Sign Up" id="signup_button"*/}
                  {/* className="large orange button" data-disable-with="Creating Account..."/>*/}

                  {/* <p className="tos">Have an account?*/}
                  {/* <Link to='/signin'>Log in</Link>*/}
                  {/* </p>*/}

                  {/* </form>*/}

                  <SignUpForm onSubmit={this.handleSubmit} signUp={this.props.signup} intl={this.context.intl} />

                </div>

                <div className='signup-content-section small'>
                  <div className='signup-message'>
                    <h3>{this.context.intl.formatMessage(messages.signUp_Introduction_Title)}</h3>
                    <ul className='bullets'>
                      <FormattedHTMLMessage {...messages.signUp_Introduction_Detail} />
                    </ul>
                  </div>
                  <p>{this.context.intl.formatMessage(messages.signUp_HaveAccount)}
                    <Link to='/signin'>{this.context.intl.formatMessage(messages.login)}</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
  // signup: PropTypes.number.isRequired,
  // doubleAsync: PropTypes.func.isRequired,
  // increment: PropTypes.func.isRequired
}

// By defining contextTypes it will enable you to use intl object which is a context type prop
SignUp.contextTypes = {
  intl: React.PropTypes.object.isRequired
}

export default SignUp
