import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { connect } from 'react-redux'
import { setStar } from './RatingReducer'

export class Rating extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props.point)
    this.state = {
      point: this.props.point || 0,
      isRated: false
    }
    // this.hoverStar = this.hoverStar.bind(this)
    // this.setStar = this.setStar.bind(this)
  }
  setStar = (point) => {
    if (!this.state.isRated && this.props.allowRate) {
      this.setState({
        isRated: true,
        point: point
      })
      this.props.setStar(point)
    }
  }
  // hoverStar = (point) => {
  //   console.log('hoverstar' + point)
  //   // if (!this.state.isRated) {
  //   //   this.setState({
  //   //     star: point
  //   //   })
  //   // }
  // }
  // clearStar = () => {
  //   console.log('clearStar')
  //   if (!this.state.isRated) {
  //     this.setState({
  //       star: 0
  //     })
  //   }
  // }
  render () {
    let ratingElement = []
    for (let i = 10; i > 0; i--) {
      let star = i / 2
      if (this.props.allowRate) {
        ratingElement.push(<span key={i}>
          <input type='radio' id={'star' + star} name='rating' value={star} onClick={() => this.setStar(star)} />
          <label className={(i % 2 === 0 ? ' full ' : ' half ') + (this.state.point >= star && this.state.point > 0 ? ' rated' : '')} htmlFor={'star' + star} title={`Awesome - ${star} stars`} />
        </span>)
      } else {
        ratingElement.push(<span key={i}>
          <input type='radio' id={'star' + star} name='rating' value={star} />
          <label className={(i % 2 === 0 ? ' full ' : ' half ') + (this.props.point >= star && this.props.point > 0 ? ' rated' : '')} htmlFor={'star' + star} title={`Awesome - ${star} stars`} />
        </span>)
      }
    }
    return (
      <div className={'rating ' + this.props.class || ''} >
        {ratingElement}
      </div>
    )
  }
}
Rating.propTypes = {
  point: PropTypes.number,
  class: PropTypes.string,
  setStar: PropTypes.func,
  allowRate: PropTypes.bool
  // hoverStar: PropTypes.func,
  // clearStar: PropTypes.func
}
const mapDispatchToProps = {
  setStar: (star) => setStar(star)
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Rating)

