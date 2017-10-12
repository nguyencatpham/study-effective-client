import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import messages from '../../../i18n/base-en'
import SignInForm from './SignInForm'
import '../assets/style.scss'
import Seo from '../../../components/Seo/Seo'
import Facebook from '../../../components/SocialLogin/Facebook'
import Google from '../../../components/SocialLogin/Google'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    this.props.signIn(user)
  };

  render () {
    return (
      <div className='signin-form fluid-container'>
        <Seo title={this.context.intl.formatMessage(messages.signIn_Title)} />
        <div className='fluid-container'>
          <div className='row center-x'>
            <div className='signup-stage phone-col-12 tablet-col-12 desktop-col-8'>
              <div className='signin-view'>
                <div className='signin-content'>
                  <h3>{this.context.intl.formatMessage(messages.signIn_Title)}</h3>

                  <div className='social-signin'>
                    <div className='auth_provider field'>
                      <Facebook text={this.context.intl.formatMessage(messages.social_fb_login_button)} />

                    </div>
                    <div className='auth_provider field'>
                      <Google text={this.context.intl.formatMessage(messages.social_gg_login_button)} />

                    </div>
                    {/* <div className='auth_provider field'>
                      <Link to='/signin' className='popup twitter-popup twitter button'>
                        <span>{this.context.intl.formatMessage(messages.signIn_TwitterSignIn)}</span>
                      </Link>
                    </div> */}
                  </div>

                  <div className='email-signin'>

                    <div className='divider'>
                      <div className='label'>{this.context.intl.formatMessage(messages.or)}</div>
                    </div>

                    <SignInForm onSubmit={this.handleSubmit} signIn={this.props.signin} intl={this.context.intl} />

                  </div>

                  <div className='signup'>{this.context.intl.formatMessage(messages.signIn_HaveNoAccout)} <Link to='/signup'>{this.context.intl.formatMessage(messages.register)}</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SignIn.propTypes = {
  // signin: PropTypes.object.isRequired
}

// By defining contextTypes it will enable you to use intl object which is a context type prop
SignIn.contextTypes = {
  intl: React.PropTypes.object.isRequired
}

export default SignIn
