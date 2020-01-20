import styled from 'styled-components/macro'

export const Root = styled.form`
  > input,
  textarea {
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #00000044;

    margin: 15px 10px 0 0;
    padding: 5px;

    ::placeholder {
      color: grey;
    }
  }
`

export const NameInput = styled.input`
  flex: 1 0;
`

export const EmailInput = styled.input`
  flex: 1 0;
`

export const SubjectInput = styled.input`
  flex: 1 100%;
`

export const MessageInput = styled.textarea`
  flex: 1 100%;
  resize: none;
`

export const Submit = styled.button`
  flex: 1 100%;
  border: 0;
  margin: 15px 10px 0 0;
  padding: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color2};
  border-radius: 4px;
`
