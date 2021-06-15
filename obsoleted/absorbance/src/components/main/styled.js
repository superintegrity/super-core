import styled from 'styled-components/macro'

export const StyledMain = styled.main`
  justify-content: center;
`

export const StyledMainBody = styled.div`
  margin: 0 20px 20px;

  @media all and (min-width: 768px) {
    flex: 1 0 700px;
    max-width: 900px;

    margin: 0 50px 20px;
  }
`
