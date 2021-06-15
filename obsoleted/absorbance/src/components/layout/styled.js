import styled from 'styled-components/macro'

export const Root = styled.div`
  height: 100vh;
  align-items: stretch;
  align-content: stretch;
  justify-content: center;

  > header {
    padding-top: 20px;
  }

  > footer {
    margin-top: auto;
    justify-content: center;
    padding: 5px 0;
  }

  @media all and (min-width: 768px) {
    > div {
      max-width: 920px;
      margin: 30px 30px 30px;

      > header {
        flex: 1;
      }

      > nav {
        flex: 1;
      }
    }
  }
`
