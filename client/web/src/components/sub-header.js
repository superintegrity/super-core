import React from "react"
import PropTypes from "prop-types"
import toUpper from "ramda/es/toUpper"

export const SubHeader = ({ title }) => (
  <div style={styles.root}>
    <h1 style={styles.header}>{toUpper(title)}</h1>

  </div>
)

SubHeader.propTypes = {
  title: PropTypes.string,
}

SubHeader.defaultProps = {
  title: ``,
}

/**
 * @type {Record<string, import('react').CSSProperties}
 */
const styles = {
  root: {
    height: 300,
    backgroundColor: "rgba(166, 147, 116, 1)",
    marginBottom: `1.45rem`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  spacer: {
    marginBottom: 30,
  },
  header: {
    color: "#FFF",
    fontWeight: "bold",
    fontFamily: "anton, sans-serif",
    fontSize: 48,
  },
}
