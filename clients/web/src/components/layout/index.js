import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import './reset.css'

import { Root } from './styled'
import { Header } from '../header'
import { Footer } from '../footer'
import { theme } from './defaultTheme'

/**
 *
 * @param {object} input
 * @param {object} input.children
 * @param {boolean=} input.disableNav
 */
export const Layout = ({ children, disableNav }) => {
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
        <Header disableNav={disableNav} siteTitle={site.siteMetadata.title} />
        <main>{children}</main>
        <Footer siteTitle={site.siteMetadata.title} />
      </Root>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
