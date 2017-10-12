import React from 'react'
import {connect} from 'react-redux'
import ReactNotify from 'react-notify'
import {clearMessage} from './NotifyReducer'
import {ERROR, SUCCESS, INFO, NONE} from '../../static/enum/Message.enum'
import messages from '../../i18n/base-en'
import './notify.scss'

export class Notify extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidUpdate () {
    let self = this
    switch (this.props.type) {
      case SUCCESS:
        this.refs.notificator.success(this.context.intl.formatMessage(this.props.title), this.context.intl.formatMessage(this.props.body), 4000)
        break
      case INFO:
        this.refs.notificator.info(this.context.intl.formatMessage(this.props.title), this.context.intl.formatMessage(this.props.body), 4000)
        break
      case ERROR:
        this.refs.notificator.error(this.context.intl.formatMessage(this.props.title), this.context.intl.formatMessage(this.props.body), 4000)
        break
      default:
        break
    }
    setTimeout(function () {
      self.props.clearMessage()
    }, 4000)
  }
  render () {
    return (
      <div>
        <ReactNotify ref='notificator' />
      </div>
    )
  }
}
Notify.propTypes = {
  type: React.PropTypes.number,
  clearMessage: React.PropTypes.func,
  title: React.PropTypes.object,
  body: React.PropTypes.object
}
Notify.contextTypes = {
  intl: React.PropTypes.object.isRequired
}
const mapDispatchToProps = {
  clearMessage: () => clearMessage()
}

const mapStateToProps = (state) => {
  return {
    type: state.notification ? state.notification.type : NONE,
    body: state.notification ? state.notification.body : messages.notification_empty,
    title: state.notification ? state.notification.title : messages.notification_empty
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify)
