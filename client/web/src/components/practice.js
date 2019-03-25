import React from "react"
import PropTypes from "prop-types"
import toUpper from "ramda/es/toUpper"

export const Practice = ({ heading, subHeading, detail, index }) => (
  <div style={styles.root}>
    {index > 0 && <hr />}
    <h1
      style={{
        ...styles.heading,
        ...(index % 2 == 0 ? styles.headingAlt0 : styles.headingAlt1),
      }}
    >
      {heading}
    </h1>
    <h2 style={styles.subHeading}>{subHeading}</h2>
    <p style={styles.detail}>{detail}</p>
  </div>
)

/**
 * @type {Record<string, import('react').CSSProperties}
 */
const styles = {
  root: {
    marginLeft: 30,
    marginRight: 30,
  },
  heading: {
    fontWeight: "bold",
    fontFamily: "anton, sans-serif",
    fontSize: 48,
  },
  headingAlt0: {
    color: "#757575",
  },
  headingAlt1: {
    color: "#A69374",
  },
  subHeading: {
    fontWeight: "lighter",
  },
}
