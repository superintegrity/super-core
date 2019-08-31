import styled from 'styled-components/macro'

export const AboutSection = styled.div`
  > h3 {
    > span {
      color: ${({ theme }) => theme.main};
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

export const StaffSection = styled.section`
  > h2 {
    margin: 10px 0;
    font-size: 1.3em;
  }

  > h3 {
    color: ${({ theme }) => theme.main};
    font-size: 1em;
    /* margin: 0; */
  }

  @media all and (min-width: 768px) {
    flex: 1;
  }
`
