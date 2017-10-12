import React from 'react'
import { GoogleLogin } from 'react-google-login-component'
import { connect } from 'react-redux'
import messages from '../../i18n/base-en'
import { responseGoogle } from './GoogleReducer'
import './google.scss'

export class Google extends React.Component {
  constructor (props) {
    super(props)
    this.responseGoogle = this.responseGoogle.bind(this)
  }
  responseGoogle (googleUser) {
    let accessToken = googleUser.getAuthResponse().id_token
    if (!this.props.isLogedIn) {
      console.log(googleUser.getAuthResponse())
      this.props.responseGoogle(googleUser.getAuthResponse())
    }
  }
  render () {
    return (
      <div>
        <GoogleLogin socialId='487277247321-0fg34gkosjjhbvanlgve9psdk9kn41um.apps.googleusercontent.com'
          className='google-login'
          scope='profile'
          responseHandler={this.responseGoogle}
          buttonText={this.props.text} />
      </div>
    )
  }

}
Google.propTypes = {
  responseGoogle: React.PropTypes.func,
  text: React.PropTypes.string,
  isLogedIn: React.PropTypes.bool
}
const mapDispatchToProps = {
  responseGoogle: (response) => responseGoogle(response)
}

const mapStateToProps = (state) => ({
  isLogedIn: state.app.acceptToken !== null
})

export default connect(mapStateToProps, mapDispatchToProps)(Google)
