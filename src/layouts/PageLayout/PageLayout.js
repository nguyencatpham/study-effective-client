import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/core.scss'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='freezable-body logreg-wrapp'>
    <div className='post-header'>

      {children}

    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default PageLayout
