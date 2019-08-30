import styled from 'styled-components/macro'

export const Section = styled.div`
  & iframe {
    flex: 1;
    border: 0;
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
`

export const MapBox = styled.div`
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
