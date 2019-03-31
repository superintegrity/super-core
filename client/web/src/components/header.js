import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu } from "./menu"

export const Header = ({ siteTitle }) => (
  <header style={styles.root}>
    <div style={styles.content}>
      <div style={styles.logo}>
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>

      {/* <Menu /> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

/**
 * @type {Record<string, import('react').CSSProperties}
 */
const styles = {
  root: {
    backgroundColor: "rgba(77, 75, 75, 1)",
    height: 122,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    fontSize: "0.9em",
  },
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
