import React from 'react'
import { StyledMain, StyledMainBody } from './styled'

/**
 *
 * @param {object} input
 * @param {any} input.children
 */
export const Main = ({ children }) => (
  <StyledMain>
    <StyledMainBody>{children}</StyledMainBody>
  </StyledMain>
)
