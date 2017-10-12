import FacebookLogin from 'react-facebook-login'
import React from 'react'
import { connect } from 'react-redux'
import { responseFacebook } from './FacebookReducer'
import './facebook.scss'
import messages from '../../i18n/base-en'

export class Facebook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isReload: true
    }
    this.handleResponse = this.handleResponse.bind(this)
  }
  handleResponse = (response) => {
    if (!this.props.isLogedIn) {
      this.props.responseFacebook(response)
    }
  }
  render () {
    return (
      <FacebookLogin
        appId='1720965508211779'
        scope='public_profile,user_friends,user_actions.books,email,user_about_me,user_actions.books,user_actions.news,user_birthday,user_education_history,user_events,user_hometown,user_likes,user_location,user_photos,user_posts,user_relationships,read_custom_friendlists,pages_messaging_phone_number'
        fields='name,email,picture'
        callback={this.handleResponse}
        textButton={this.props.text}
        version='2.3'
        language='vi_VN'
        isMobile={false}
        cssClass='popup facebook-popup facebook large button'
      />
    )
  }
}
Facebook.propTypes = {
  responseFacebook: React.PropTypes.func,
  text: React.PropTypes.string,
  isLogedIn: React.PropTypes.bool
}
const mapDispatchToProps = {
  responseFacebook: (response) => responseFacebook(response)
}

const mapStateToProps = (state) => ({
  isLogedIn: state.app.acceptToken !== null
})

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
