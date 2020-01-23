import styled from 'styled-components/macro'

export const Root = styled.footer`
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.textInv};
  flex-flow: column nowrap;

  align-content: center;
  align-items: center;
  height: 80px;
`
