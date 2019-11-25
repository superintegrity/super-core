import styled from 'styled-components/macro'

export const Root = styled.footer`
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.textInv};
  height: 50px;
`
