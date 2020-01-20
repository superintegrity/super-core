import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './styled'

export const Footer = ({ siteTitle }) => (
  <Root>
    © {new Date().getFullYear()} {siteTitle}
  </Root>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
