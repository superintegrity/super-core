import React from "react"
import styled from "styled-components"

export const Footer = ({ siteTitle }) => (
  <Root>
    <Text>
      @{new Date().getFullYear()} {siteTitle}
    </Text>
  </Root>
)

const Root = styled.div`
  height: 100px;
  background-color: rgba(225, 58, 68, 1);
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const Text = styled.text`
  color: #fff;
`
