import styled from 'styled-components/macro'

export const Section = styled.div`
  align-content: flex-start;
  align-items: flex-start;

  > h1 {
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 0.2em;

    > span {
      color: ${({ theme }) => theme.main};
    }
  }

  > h2 {
    font-size: 0.9em;
    color: gray;
  }

  > a {
    color: ${({ theme }) => theme.main};
  }

  @media all and (min-width: 768px) {
    > h1 {
      font-size: 3em;
    }

    > h2 {
      font-size: 1.2em;
    }
  }
`
