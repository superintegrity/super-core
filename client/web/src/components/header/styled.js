import styled from 'styled-components/macro'

export const Root = styled.header`
  h1 {
    color: ${({ theme }) => theme.main};
    font-weight: normal;
    font-size: 1.5em;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`
