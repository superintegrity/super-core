import React from "react"
import PropTypes from "prop-types"
import toUpper from "ramda/es/toUpper"
import styled from "styled-components"

export const SubHeader = ({ title }) => (
  <Root>
    <Head>{toUpper(title)}</Head>
  </Root>
)

SubHeader.propTypes = {
  title: PropTypes.string,
}

SubHeader.defaultProps = {
  title: ``,
}

const Root = styled.div`
  height: 150px;
  background-color: rgba(166, 147, 116, 1);
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and (mix-width: 480px) {
    height: 300px;
  }
`

const Head = styled.h1`
  color: #fff;
  font-family: "libre baskerville", sans-serif;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`
