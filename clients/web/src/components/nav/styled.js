import styled from 'styled-components/macro'

export const Root = styled.nav`
  font-size: 0.9em;
  a {
    color: grey;
  }

  > ul {
    list-style: none;
    margin: 0;
    flex: 1;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    > li {
      flex: 1 100%;
    }
  }

  .active {
    color: ${({ theme }) => theme.text};
  }

  @media all and (min-width: 768px) {
    > ul {
      > li {
        flex: 1;
      }
    }
  }
`
