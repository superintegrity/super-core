import styled from 'styled-components/macro'

export const Root = styled.div`
  > header {
    margin: 30px 30px 0;
  }

  > nav {
    margin: 0 30px;
  }

  > main {
    margin: 0 30px 30px;
  }

  > footer {
    padding: 20px 30px;
    justify-content: center;
  }

  @media all and (min-width: 768px) {
    align-items: center;
    align-content: center;
    justify-content: center;

    > header {
      max-width: 800px;
    }

    > nav {
      max-width: 800px;
    }

    > main {
      max-width: 800px;
    }
  }
`
