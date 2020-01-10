import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Root } from './styled'
import { Image } from './images'
import { Nav } from '../nav'

export const Header = ({ siteTitle }) => (
  <Root>
    <Link to="/">
      <Image id="logo" />
      <span>{siteTitle}</span>
    </Link>
    <Nav />
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
