import React from 'react'
import styled from 'styled-components/macro'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

export default () => (
  <Grid>
    <Row>
      <MyCol xs={12} sm={3} md={2} lg={1}>
        Col 1x1
      </MyCol>
      <MyCol xs={6} sm={6} md={8} lg={10}>
        Col 1x2
      </MyCol>
      <MyCol xs={6} sm={3} md={2} lg={1}>
        Col 1x3
      </MyCol>
    </Row>
    <Row>
      <MyCol xs={12} sm={3} md={2} lg={1}>
        Col 2x1
      </MyCol>
      <MyCol xs={12} sm={9} md={10} lg={11}>
        <Grid>
          <Row>
            <MySubCol xs={12}>Sub Col 2x2b</MySubCol>
          </Row>
        </Grid>
      </MyCol>
    </Row>
    <Row>
      <MyCol xs={10} sm={6} md={8} lg={10}>
        Col 3x1
      </MyCol>
      <MyCol xs={2} sm={6} md={4} lg={2}>
        Col 3x2
      </MyCol>
    </Row>
  </Grid>
)

const MyCol = styled(Col)`
  background: blue;
  border: 1px solid white;
  color: white;
`

const MySubCol = styled(Col)`
  background: green;
`
