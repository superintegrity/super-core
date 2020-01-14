import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Root } from './styled'
import { Image } from './images'
import { Nav } from '../nav'

/**
 *
 * @param {object} input
 * @param {string} input.siteTitle
 * @param {boolean=} input.disableNav
 */
export const Header = ({ siteTitle, disableNav }) => (
  <Root>
    <Link to="/">
      <Image id="logo" />
      <span>{siteTitle}</span>
    </Link>
    {!disableNav && <Nav />}
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
