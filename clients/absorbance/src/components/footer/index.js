import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './styled'
import { NavBottom } from '../nav-bottom'

export const Footer = ({ siteTitle }) => (
  <Root>
    <strong>
      © {new Date().getFullYear()} {siteTitle}
    </strong>
    <NavBottom />
  </Root>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
