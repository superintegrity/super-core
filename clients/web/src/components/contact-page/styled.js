import styled from 'styled-components/macro'

export const Section = styled.div`
  & iframe {
    width: 1px; /* Workaround flex-basis not working on iframe */
    flex: 1;
    border: 0;
    border-radius: 5px;
  }

  a {
    color: ${({ theme }) => theme.color6};
  }

  @media all and (min-width: 768px) {
    > div {
      flex: 1;
    }
  }
`

export const ContactBox = styled.div`
  justify-content: flex-start;
  align-content: flex-start;

  > h3 {
    margin: 5px 0;
    font-size: 1.1em;
  }

  margin-bottom: 20px;
`

export const MapBox = styled.div`
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
