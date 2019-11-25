import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import './reset.css'

import { Root } from './styled'
import Header from '../header'
import Footer from '../footer'
import { theme } from './defaultTheme'

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
    <ThemeProvider theme={theme}>
      <Root>
        <Header siteTitle={site.siteMetadata.title} />
        <main>{children}</main>
        <Footer siteTitle={site.siteMetadata.title} />
      </Root>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
