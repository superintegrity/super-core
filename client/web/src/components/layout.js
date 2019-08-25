/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer } from "./footer"
import { Fonts } from "./fonts"
import "./layout.css"

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Fonts />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
