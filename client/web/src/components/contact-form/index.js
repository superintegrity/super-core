import React, { useState } from 'react'
import {
  Root,
  NameInput,
  EmailInput,
  SubjectInput,
  MessageInput,
} from './styled'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Root>
      <NameInput
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
        placeholder="Name"
      />
      <EmailInput
        value={email}
        onChange={event => {
          setEmail(event.target.value)
        }}
        placeholder="Email"
      />
      <SubjectInput
        value={subject}
        onChange={event => {
          setSubject(event.target.value)
        }}
        placeholder="Subject"
      />
      <MessageInput
        value={message}
        onChange={event => {
          setMessage(event.target.value)
        }}
        placeholder="Message"
      />
    </Root>
  )
}

export default ContactForm
