import React from 'react'
import PropTypes from 'prop-types'
import UserInfoForm from './UserInfoForm'
import '../assets/style.scss'
import Seo from '../../../components/Seo/Seo'
import messages from '../../../i18n/base-en'

class UserInfo extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmitUserInfo = (user) => {
    // Do something with the form values
    this.props.updateUserInfo(user)
  };

  render () {
    return (
      <div className='panel'>
        <Seo title={this.context.intl.formatMessage(messages.userProfile_Menu_UserInfo)} />
        {/* <form className="edit_user"*/}
        {/* acceptCharset="UTF-8">*/}
        {/* <h4 className="form-title">Edit Your Profile</h4>*/}

        {/* <div className="form-body">*/}
        {/* <div>*/}
        {/* <div className="field wide">*/}
        {/* <label htmlFor="user_first_name">First name</label><span className="req">*</span><br/>*/}
        {/* <input type="text" name="user" id="user_first_name"/>*/}
        {/* </div>*/}

        {/* <div className="field wide">*/}
        {/* <label htmlFor="user_last_name">Last name</label><span className="req">*</span><br/>*/}
        {/* <input type="text" name="user" id="user_last_name"/>*/}
        {/* </div>*/}

        {/* <div className="field wide">*/}
        {/* <label htmlFor="user_phone">Mobile Phone</label><br/>*/}
        {/* <input maxLength="14" size="14" type="tel" name="user"*/}
        {/* id="user_phone"/>*/}
        {/* </div>*/}
        {/* </div>*/}

        {/* <div className="field">*/}
        {/* <label>Privacy Controls</label>*/}
        {/* <br/>*/}
        {/* <label htmlFor="user_privacy_show_avatar">Use your full name and avatar on chef reviews</label>*/}
        {/* </div>*/}

        {/* <div className="form-buttons">*/}
        {/* <input type="submit" name="commit" value="Update Profile" className="large orange button"*/}
        {/* data-disable-with="Updating Profile..."/>*/}
        {/* </div>*/}
        {/* </div>*/}
        {/* </form>*/}
        <UserInfoForm onSubmit={this.handleSubmitUserInfo} userProfile={this.props.userProfile} intl={this.context.intl} />
      </div>
    )
  }
}

UserInfo.propTypes = {
  // signin: PropTypes.object.isRequired
}

// By defining contextTypes it will enable you to use intl object which is a context type prop
UserInfo.contextTypes = {
  intl: React.PropTypes.object.isRequired
}

export default UserInfo
