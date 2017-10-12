import { connect } from 'react-redux'
import { rewriteLink } from '../../../containers/AppReducer'
import Home from '../components/Home'
import StateTree from '../../../modules/StateTree'
import { globalConfig, defaultLanguage } from '../../../../config/config'

const mapDispatchToProps = {
  rewriteLink: (message) => rewriteLink(message)
}

const mapStateToProps = (state) => {
  let settings = state.app.settings || StateTree.app.settings
  let language = state.app.language || StateTree.app.language
  let slogan = settings.find(x => x.key === globalConfig[language].slogan)
  let sloganTag = settings.find(x => x.key === globalConfig[language].slogan_tag)

  return {
    settings: settings,
    language: language,
    slogan: slogan ? slogan.value : '',
    sloganTag: sloganTag ? sloganTag.value : '',
    isLogedIn: state.app.acceptToken !== null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
