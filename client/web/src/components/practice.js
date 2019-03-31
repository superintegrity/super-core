import React from "react"
import PropTypes from "prop-types"
import toUpper from "ramda/es/toUpper"
import styled from "styled-components"

export const Practice = ({ heading, subHeading, detail, index }) => (
  <div style={styles.root}>
    {index > 0 && <hr />}
    {index % 2 == 0 ? (
      <HeadingAlt0>{heading}</HeadingAlt0>
    ) : (
      <HeadingAlt1>{heading}</HeadingAlt1>
    )}

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
  subHeading: {
    fontWeight: "lighter",
  },
}

const Heading = styled.h1`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 26px;
`

const HeadingAlt0 = styled(Heading)`
  color: #757575;
`

const HeadingAlt1 = styled(Heading)`
  color: #a69374;
`
