import styled from 'styled-components/macro'

export const AboutSection = styled.div`
  > h3 {
    > span {
      color: ${({ theme }) => theme.main};
    }
  }

  p {
    margin-bottom: 8px;
    text-align: justify;
  }

  p::first-letter {
    font-weight: bold;
    font-size: 1.1em;
  }

  @media all and (min-width: 768px) {
    > h3 {
      flex: 1;
      margin-right: 20px;
    }

    > div {
      flex: 1;
    }
  }
`

export const StaffSection = styled.section`
  > h2 {
    margin: 20px 0;
    font-size: 1.3em;
  }

  > h3 {
    color: ${({ theme }) => theme.main};
    font-size: 1em;
  }

  p::first-letter {
    font-weight: bold;
    font-size: 1.1em;
  }

  @media all and (min-width: 768px) {
    flex: 1;
    margin-right: 20px;
  }
`
