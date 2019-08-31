import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Root } from './styled'
import Image from './images'

const Header = ({ siteTitle }) => (
  <Root>
    <Link to="/">
      <h1>
        <Image id="logo" /> {siteTitle}
      </h1>
    </Link>
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
