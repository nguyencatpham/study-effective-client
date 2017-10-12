import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import { IntlProvider, updateIntl } from 'react-intl-redux'
import defaultLayout from '../../config/layout'
import clone from 'clone'
import ReactGA from 'react-ga'

import Loading from '../components/Loading/Loading'
import Notify from '../components/Notification/Notify'
import { showLoading, hideLoading } from '../components/Loading/LoadingReducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { defaultLanguage, initialNow } from '../../config/config'
import { changeLanguage } from './AppReducer'
import i18n from '../i18n'
injectTapEventPlugin()

class AppContainer extends React.Component {
  static propTypes = {
    layout: PropTypes.object,
    history: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }
  // react GA
  logPageView () {
    if (typeof (window)) {
      ReactGA.set({ page: window.location.pathname })
      ReactGA.pageview(window.location.pathname)
    }
  }
  componentDidMount () {
    ReactGA.initialize('UA-101934042-1')
    // material on tap touch
  }
  componentWillMount () {
    if (typeof window === 'undefined') {
      global.window = {localtion: {href: ''}}
      global.navigator = { userAgent: 'all' }
    }
    let store = this.props.store
    store.dispatch(showLoading())
    const language = store.getState().app.language || defaultLanguage

    // change language
    store.dispatch(changeLanguage(language))

    // setTimeout(function () {
    store.dispatch(hideLoading())
    // }, 2000)
  }

  render () {
    const { layout, history, routes, routerKey, store } = this.props

    return (
      <Provider store={store}>
        <IntlProvider
          key='intl'
          initNow={initialNow}
        >
          <MuiThemeProvider>
            <div style={{ height: '100%' }}>
              <Helmet {...Object.assign(clone(defaultLayout), layout)} />
              <Loading />
              <Notify />
              <Router history={history} children={routes} key={routerKey} onUpdate={this.logPageView} />
            </div>
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    )
  }
}

export default AppContainer
