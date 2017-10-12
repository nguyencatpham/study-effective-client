import axios from 'axios'
import * as routeActions from 'react-router-redux'
import * as constant from '../../config/config'
import { updateAppState } from '../containers/AppReducer'
import { showLoading, hideLoading } from '../components/Loading/LoadingReducer'

let isAbsoluteURLRegex = /^(?:\w+:)\/\//

const createAxiosInterceptor = (store) => {
  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    store.dispatch(showLoading())
    // Do something before request is sent
    const { app } = store.getState()
    if (app) {
      config.headers['LanguageId'] = app.language === constant.defaultLanguage ? 1 : 2
      config.headers['AnonymousToken'] = app.anonymousToken || ''
      if (app.acceptToken) {
        config.headers['Authorization'] = 'Bearer ' + app.acceptToken
      }
    }
    // Concatenate base path if not an absolute URL
    if (!isAbsoluteURLRegex.test(config.url)) {
      config.url = constant.domain + config.url
    }
    console.log('Starting Request', config.url, app.anonymousToken)
    return config
  }, function (error) {
    store.dispatch(hideLoading())
    // Do something with request error
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function (response) {
    console.log('Response:', response.status)
    store.dispatch(hideLoading())
    return response
  }, function (error) {
    if (error.response.status === 401) {
      store.dispatch(updateAppState())
      // store.dispatch(routeActions.push('/signin')) //tam thoi che lai
    }
    store.dispatch(hideLoading())
    return Promise.reject(error)
  })
}

export default createAxiosInterceptor

