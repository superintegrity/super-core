import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Root } from './styled'

const Header = ({ siteTitle }) => (
  <Root>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
