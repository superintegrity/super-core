import React, { useState } from 'react'
import {
  Root,
  NameInput,
  EmailInput,
  SubjectInput,
  MessageInput,
  Submit,
} from './styled'

export const ContactForm = ({ toEmail }) => {
  const [name, setName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Root action={`https://formspree.io/${toEmail}`} method="POST">
      <NameInput
        value={name}
        name="name"
        onChange={event => {
          setName(event.target.value)
        }}
        placeholder="Name"
      />
      <EmailInput
        value={fromEmail}
        name="email"
        onChange={event => {
          setFromEmail(event.target.value)
        }}
        placeholder="Email"
      />
      <SubjectInput
        value={subject}
        name="subject"
        onChange={event => {
          setSubject(event.target.value)
        }}
        placeholder="Subject"
      />
      <MessageInput
        value={message}
        name="message"
        onChange={event => {
          setMessage(event.target.value)
        }}
        placeholder="Message"
      />
      <Submit>Submit</Submit>
    </Root>
  )
}
