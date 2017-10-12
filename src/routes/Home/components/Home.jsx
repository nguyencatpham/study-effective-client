import React from 'react'
import ReewodHero from '../../../components/Reewod/ReewodHero'
import ReewodHiw from '../../../components/Reewod/ReewodHiw'
import ReewodMissionHero from '../../../components/Reewod/ReewodMissionHero'
import ReewodPillars from '../../../components/Reewod/ReewodPillars'
import ReewodManifesto from '../../../components/Reewod/ReewodManifesto'
import ReewodVillain from '../../../components/Reewod/ReewodVillain'
import '../assets/style.scss'
import Seo from '../../../components/Seo/Seo'
import LazyLoad, { forceCheck } from 'react-lazyload'
import messages from '../../../i18n/base-en'
import PlaceholderComponent from '../../../components/Placeholder'
import Widget from '../../../components/Widget'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      arr: Array.apply(null, Array(20)).map((a, index) => {
        return {
          uniqueId: index,
          once: [6, 7].indexOf(index) > -1
        }
      })
    }
  }
  componentDidMount () {
    forceCheck()
  }
  render () {
    return (
      <div>

        <Seo title={`${this.context.intl.formatMessage(messages.footer_reewod)} - ${this.props.slogan}`} />
        <LazyLoad placeholder={<PlaceholderComponent />} >
          <ReewodHero settings={this.props.settings} intl={this.context.intl} rewriteLink={this.props.rewriteLink} language={this.props.language} slogan={this.props.slogan} sloganTag={this.props.sloganTag} isLogedIn={this.props.isLogedIn} />
        </LazyLoad>
        {/* <!-- .f-strata .hero -->*/}

        <LazyLoad placeholder={<PlaceholderComponent />} >
          <ReewodHiw />
        </LazyLoad>
        {/* <!-- .f-strata .hiw -->*/}

        <LazyLoad placeholder={<PlaceholderComponent />} >
          <ReewodMissionHero />
        </LazyLoad>
        {/* <!-- .f-strata .mission-hero -->*/}

        <LazyLoad placeholder={<PlaceholderComponent />} >
          <ReewodPillars />
        </LazyLoad>
        {/* <!-- .f-strata pillars -->*/}

        <LazyLoad placeholder={<PlaceholderComponent />} >
          <ReewodManifesto />
        </LazyLoad>
        {/* <!-- .f-strata .manifesto -->*/}

        <LazyLoad placeholder={<PlaceholderComponent />} >
          <ReewodVillain intl={this.context.intl} rewriteLink={this.props.rewriteLink} language={this.props.language} isLogedIn={this.props.isLogedIn} />
        </LazyLoad>
        {/* <!-- .f-strata .villain -->*/}
      </div>
    )
  }
}
Home.propTypes = {
  rewriteLink: React.PropTypes.func,
  language: React.PropTypes.string,
  isLogedIn: React.PropTypes.bool,
  settings: React.PropTypes.array,
  slogan: React.PropTypes.string,
  sloganTag: React.PropTypes.string
}
Home.contextTypes = {
  intl: React.PropTypes.object.isRequired
}
export default Home
