import React from "react"
import PropTypes from "prop-types"
import toUpper from "ramda/es/toUpper"
import styled from "styled-components"

export const Footer = () => (
  <Root>
    <Text>@{new Date().getFullYear()} Super Integrity</Text>
  </Root>
)

const Root = styled.div`
  height: 100px;
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

const Text = styled.text`
  color: #fff;
`
