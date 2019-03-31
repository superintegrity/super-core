import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

export const Menu = ({ opened }) => <MenuOverlay />

const MenuOverlay = () => (
  <MenuOverlayContainer>
    {menuItems.map(menuItem => (
      <Link activeClassName="active" to={menuItem.url}>
        {menuItem.displayName}
      </Link>
    ))}
  </MenuOverlayContainer>
)

const menuItems = [
  { displayName: "HOME", url: "/" },
  { displayName: "PRACTICE AREAS", url: "/practice-areas/" },
  { displayName: "ATTORNEYS", url: "/attorneys/" },
  { displayName: "NEWS & RESOURCES", url: "/news-resources/" },
  { displayName: "CONTACT", url: "/contact/" },
]

/**
 * @type {Record<string, import('react').CSSProperties}
 */
const styles = {
  root: {},
  content: {
    display: "flex",
    marginLeft: 50,
    marginRight: 50,
  },
  logo: {
    marginRight: 200,
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  },
  menuItem: {},
}

const MenuOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
