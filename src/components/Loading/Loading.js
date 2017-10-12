import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {showLoading, hideLoading} from './LoadingReducer'
import './Loading.scss'

class Loading extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      // <div
      //   className={'modal-overlay loading-overlay dismiss-outside' + (this.props.loading.isloading ? ' onscreen' : '')}>
      //   <div className="fluid-container">
      //     <div className="row center-x">
      //       <div className="phone-col-12 panel">
      //         <div className="order-gif"></div>
      //         <div className="subtitle">LOADING...</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className={'reewod-loading modal-overlay loading-overlay dismiss-outside ' + (this.props.loading.isloading ? ' onscreen' : '')}>

        <h2 className='reewod-loading-caption'>Cooking in progress..</h2>
        <div id='cooking'>
          <div className='bubble' />
          <div className='bubble' />
          <div className='bubble' />
          <div className='bubble' />
          <div className='bubble' />
          <div id='area'>
            <div id='sides'>
              <div id='pan' />
              <div id='handle' />
            </div>
            <div id='pancake'>
              <div id='pastry' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  showLoading: () => showLoading(),
  hideLoading: () => hideLoading()
}

const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
