import styled from 'styled-components/macro'

export const Root = styled.form`
  > input,
  textarea {
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #00000044;

    margin-top: 10px;
    padding: 5px;
  }
`

export const NameInput = styled.input`
  flex: 1 0;
  margin-right: 20px;
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
