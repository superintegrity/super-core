import React from 'react'
import { Root } from './styled'
import { Link } from 'gatsby'

export const NavBottom = () => {
  return (
    <Root>
      {menuItems.map(({ text, link }) => (
        <li key={text}>
          <Link to={link} activeClassName="active">
            {text}
          </Link>
        </li>
      ))}
    </Root>
  )
}

const menuItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Services',
    link: '/services/',
  },
  {
    text: 'About',
    link: '/about/',
  },
  {
    text: 'Contact',
    link: '/contact/',
  },
]
