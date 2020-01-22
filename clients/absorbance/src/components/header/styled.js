import styled from 'styled-components/macro'

export const StyledHeader = styled.header`
  background-color: black;
  margin-bottom: 20px;
  height: 100px;
  justify-content: center;

  /* @media all and (min-width: 768px) {
    flex: 0;
  } */
`

export const StyledHeaderBody = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  flex-flow: row;

  > a {
    color: ${({ theme }) => theme.main};
    font-weight: normal;
    font-size: 1.3em;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    > div.gatsby-image-wrapper {
      flex: none;
      width: 30px;
      margin-right: 10px;
    }

    > span {
      flex: none;
      width: 80px;
    }
  }

  @media all and (min-width: 768px) {
    flex: 0 0 700px;
  }
`
