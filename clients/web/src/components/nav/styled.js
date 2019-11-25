import styled, { css } from 'styled-components/macro'

export const Root = styled.nav`
  font-size: 0.9em;
  position: relative;

  a {
    color: grey;
  }

  > svg {
    color: white;
  }

  > ul {
    display: none;
    width: 110px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 32px;
    text-align: right;
    border: 1px solid ${({ theme }) => theme.main};
    border-radius: 4px;

    list-style: none;
    margin: 0;
    flex: 1;
    padding: 15px;

    ${/** @param {IProp} prop */ ({ isOpen }) =>
      isOpen &&
      css`
        display: block;
      `}
  }

  .active {
    color: ${({ theme }) => theme.text};
  }
`

/**
 * @typedef {object} IProp
 * @property {boolean=} isOpen
 */
