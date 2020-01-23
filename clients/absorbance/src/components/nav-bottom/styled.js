import styled from 'styled-components/macro'

export const Root = styled.ul`
  font-size: 0.7rem;

  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  flex: 1 50%;

  li + li {
    margin-left: 15px;

    ::before {
      content: '|';
      margin-right: 15px;
    }
  }

  a {
    color: white;
  }
`
