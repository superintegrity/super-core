import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu } from "./menu"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Spacer } from "./spacer"

export const Header = ({ siteTitle }) => (
  <Root>
    <Link to="/">
      <SiteTitle>{siteTitle}</SiteTitle>
    </Link>
    <Spacer />
    <Link
      style={{ color: "black" }}
      activeStyle={{ color: "white" }}
      to="/menu"
    >
      <FaBars fontWeight={100} fontSize={32} />
    </Link>
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Root = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
`

const SiteTitle = styled.h2`
  color: rgb(225, 58, 68);
  width: 150px;
  font-weight: 300;
`
