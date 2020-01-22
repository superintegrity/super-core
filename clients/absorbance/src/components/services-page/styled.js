import styled from 'styled-components/macro'

export const Section = styled.div`
  p {
    margin: 0;
    margin-bottom: 8px;
    text-align: justify;

    ::first-letter {
      font-weight: bold;
      font-size: 1.1em;
    }
  }

  @media all and (min-width: 768px) {
    > h3 {
      flex: 1;
    }

    > div {
      flex: 1;
    }
  }
`
