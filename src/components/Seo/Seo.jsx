import React from 'react'
import Helmet from 'react-helmet'
import messages from '../../i18n/base-en'
import { FormattedNumber, FormattedDate, FormattedHTMLMessage, FormattedMessage } from 'react-intl'

export const Seo = (props) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta description={props.description} />
      <title>{props.title}</title>

    </Helmet>
  )
}
export default Seo
