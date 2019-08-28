import React from "react"
import { Root, Text } from "./styled"
import { Col, Row } from "react-styled-flexboxgrid"

export const Footer = ({ siteTitle }) => (
  <Root>
    <Row>
      <Col>
        <Text>
          @{new Date().getFullYear()} {siteTitle}
        </Text>
      </Col>
    </Row>
  </Root>
)
