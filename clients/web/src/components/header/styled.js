import styled from 'styled-components/macro'

export const Root = styled.header`
  align-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;

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
`
