import styled, { css } from 'styled-components/macro'

export const Root = styled.nav`
  font-size: 0.9em;
  display: flex;
  position: relative;
  justify-content: flex-end;

  a {
    color: grey;
  }

  > svg {
    color: white;
    margin-top: 15px;
  }

  > .menu {
    display: none;
    width: 100px;
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
    margin-top: 15px;

    ${/** @param {IProp} prop */ ({ isOpen }) =>
      isOpen &&
      css`
        display: block;
      `}
  }

  .active {
    color: ${({ theme }) => theme.text};
  }

  @media all and (min-width: 768px) {
    > .menu-icon {
      display: none;
    }

    > .menu {
      display: flex;
      flex-flow: row wrap;
      flex: 1 50%;
      width: initial;
      border: 0;
      background-color: transparent;
      position: initial;
      justify-content: flex-end;
      padding: 15px 0;
      margin: 0;

      li + li {
        margin-left: 20px;
      }

      a {
        color: white;
      }

      .active {
        color: ${({ theme }) => theme.main};
      }
    }
  }
`

/**
 * @typedef {object} IProp
 * @property {boolean=} isOpen
 */
