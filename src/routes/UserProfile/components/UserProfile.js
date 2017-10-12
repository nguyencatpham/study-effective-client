import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import messages from '../../../i18n/base-en'
import '../assets/style.scss'
import Seo from '../../../components/Seo/Seo'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmitUserInfo = (user) => {
    // Do something with the form values
    this.props.updateUserInfo(user)
  };

  handleSubmitResetPassword = (user) => {
    // Do something with the form values
    this.props.changePassword(user)
  };

  render () {
    const imageUrl = this.props.userProfile.userData.imageUrl
    return (
      <div className='fluid-container full-width'>
        <Seo title={this.context.intl.formatMessage(messages.userProfile_UserInfo_Title)} />
        <div className='row'>
          <div className='account-header phone-col-12 tablet-col-12 desktop-col-12'>

            {/* <div className="breadcrumbs">*/}
            {/* <a href="/users/profile/">Your Account</a>*/}
            {/* <span className="separator">›</span>*/}
            {/* <h4 className="align-left breadcrumbs">*/}
            {/* Edit Your Profile*/}
            {/* </h4>*/}
            {/* </div>*/}

          </div>
        </div>

        <div className='row'>
          <div className='account-profile phone-col-12 tablet-col-4 desktop-col-3 alpha'>

            <div className='profile-photo'>
              <div className='avatar-photo photo' style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
              <Link className='change-photo-link' to={this.props.rewriteLink(this.context.intl.formatMessage(messages.route_profile_picture))} >
                <FormattedMessage {...messages.userProfile_ChangePhoto} />
              </Link>
            </div>
            {/* <!-- .profile-photo -->*/}

            <div className='contact-info'>
              <h4 className='account-name'>{this.props.userProfile.userData.firstName} {this.props.userProfile.userData.lastName}</h4>

              <div style={{ marginTop: '10px' }}>
                {/* <div><Link to={this.props.rewriteLink(this.context.intl.formatMessage(messages.route_user_info))} ><FormattedMessage {...messages.userProfile_Menu_UserInfo} /></Link></div> */}
                <div><Link to={this.props.rewriteLink(this.context.intl.formatMessage(messages.route_change_password))}><FormattedMessage {...messages.userProfile_Menu_ChangePassword} /></Link></div>
              </div>

              {/* <div className="affiliated-cause">*/}
              {/* <h4>Reewod Giving</h4>*/}
              {/* <div>You Order, We Donate</div>*/}
              {/* <div className="buttons"><a className="button outline small" href="/giving/">Find Your Favorite*/}
              {/* Cause</a></div>*/}
              {/* </div>*/}
            </div>
            {/* <!-- .contact-info -->*/}

            {/* <div className="social">*/}
            {/* <h4 className="align-left">Get Dessert on Your Birthday</h4>*/}
            {/* <p>Connect with Facebook so that we can send you a gift on your birthday!</p>*/}

            {/* <div className="connect">*/}
            {/* <a className="facebook button" href="/users/preauth/facebook/?strategy=add_provider">*/}
            {/* Connect with Facebook</a>*/}
            {/* </div>*/}
            {/* </div>*/}
            {/* <!-- .social -->*/}
          </div>
          {/* <!-- .account-profile -->*/}

          <div className='phone-col-12 tablet-col-8 desktop-col-9 omega'>

            {this.props.children}

          </div>
        </div>
        {/* <!-- end of account -->*/}

      </div>
    )
  }
}

UserProfile.propTypes = {
  // signin: PropTypes.object.isRequired
}

UserProfile.contextTypes = {
  intl: React.PropTypes.object.isRequired
}
export default UserProfile
