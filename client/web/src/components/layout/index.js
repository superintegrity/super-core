import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import './reset.css'
import { Root } from './styled'
import Header from '../header'
import Footer from '../footer'
import Nav from '../nav'

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Root>
      <Header siteTitle={site.siteMetadata.title} />
      <Nav />
      <main>{children}</main>
      <Footer siteTitle={site.siteMetadata.title} />
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
