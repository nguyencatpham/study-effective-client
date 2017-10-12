import React from 'react'
import ReewodFooter from '../../components/Reewod/ReewodFooter'
import ReewodHeader from '../../components/Reewod/ReewodHeader'
import './MainLayout.scss'
import '../../styles/core.scss'

// import '../../static/ga.js'

class MainLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='landing-page'>
        <div className='dialog-mask modal clickable' />
        <div id='signin-form' className='dialog zoom-in signin-form'
          style={{ position: 'fixed', top: '0px', left: '348.5px' }}>
          <a href='#' className='close close-x' />
          <h3>
            Log In To Your Account
          </h3>

          <div className='divider'>
            <div className='label'>OR</div>
          </div>

          <div className='column-container clearfix'>

            <div className='column float-left social-signin'>
              <div className='auth_provider field'>
                <a href='/users/preauth/facebook.json?return=https%3A%2F%2Freewod.com%2F%3Fforce%3Dtrue'
                  id='facebook_login_button' className='popup facebook-popup facebook large button' data-width='650'
                  data-height='700'>
                  <span>Facebook Log In</span>
                </a>
              </div>

              <div className='auth_provider field'>
                <a href='/users/preauth/twitter.json?return=https%3A%2F%2Freewod.com%2F%3Fforce%3Dtrue'
                  id='twitter_login_button' className='popup twitter-popup twitter large button' data-width='600'
                  data-height='400'>
                  <span>Twitter Log In</span>
                </a>
              </div>
            </div>

            <div className='column float-right email-signin'>
              <form className='new_user' id='new_user' action='/users/login/' acceptCharset='UTF-8' data-remote='true'
                method='post'>
                <input name='utf8' type='hidden' value='✓' />
                <div className='field'>
                  <input placeholder='Your Email' type='email' value='' name='user[email]' id='user_email' />
                  <div id='error-user_email' className='error' />
                </div>

                <div className='field'>
                  <input placeholder='Password' type='password' name='user[password]' id='user_password' />
                  <div id='error-user_password' className='error' />
                </div>

                <div>

                  <input type='submit' name='commit' value='Log In' id='login_button' className='orange button'
                    data-disable-with='Logging In...' />

                  <div style={{ marginTop: '10px' }}>
                    <a className='secondary' href='/users/password/new/'>Forgot your password?</a>
                  </div>

                  <input value='true' type='hidden' name='user[remember_me]' id='user_remember_me' />
                </div>
              </form>
            </div>
          </div>

          <div className='signup'>
            <span className='gray'>Don't have an account?</span>
            <a href='/users/signup/'>Sign up for free</a>
          </div>
        </div>
        <div className='dialog-mask modal clickable' />
        <div id='activate-account-success' className='dialog zoom-in signin-form'
          style={{ position: 'fixed', top: '0px', left: '348.5px' }}><a href='#' className='close close-x' />
          <div className='activate-account'>
            <h3>Check Your Email</h3>

            <p>
              We just sent you an email. Follow the instructions to activate your account.
            </p>
          </div>
        </div>
        <div className='dialog-mask modal clickable' />
        <div id='activate-account-dialog' className='dialog zoom-in signin-form'
          style={{ position: 'fixed', top: '0px', left: '348.5px' }}><a href='#' className='close close-x' />
          <div className='activate-account'>
            <form className='activate-account-form' id='new_user' action='/users/password.json' acceptCharset='UTF-8'
              data-remote='true' method='post'><input name='utf8' type='hidden' value='✓' />

              <h3>Activate Your Account</h3>

              <p>
                It looks like you have an existing Reewod account with the following email address that needs to be
                activated.
              </p>

              <input type='email' value='' name='user[email]' id='user_email' />
              <input type='submit' name='commit' value='Send Activation Email' className='large orange button'
                data-disable-with='Sending Email...' />
              <a className='switch-to-login desktop-link' data-return-url='/checkout/' href='/users/login/'>Log into a
                different account</a>
              <a className='mobile-link' data-return-url='/checkout/' href='/users/login/'>Log into a different account</a>
            </form>
          </div>
        </div>
        <div className='dialog-mask modal clickable' />

        <table className='fatal-error'>
          <tbody>
            <tr>
              <td className='message' />
              <td className='close-box' />
            </tr>
          </tbody>
        </table>

        <div className='freezable-body'>
          <a className='screen-reader' href='#content'>Skip Navigation</a>

          <ReewodHeader />
          {/* <!-- header -->*/}

          <div className='post-header'>

            {this.props.children}

          </div>

          <ReewodFooter />
          {/* <!-- footer -->*/}

        </div>

      </div>
    )
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default MainLayout
