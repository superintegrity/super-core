import React from 'react'
import { Root } from './styled'
import { Link } from '@reach/router'

const Nav = () => (
  <Root>
    <ul>
      {menuItems.map(({ text, link }) => (
        <li>
          <Link to={link}>{text}</Link>
        </li>
      ))}
    </ul>
  </Root>
)

const menuItems = [
  {
    text: '01 - Home',
    link: '/',
  },
  {
    text: '02 - Services',
    link: '/services',
  },
  {
    text: '03 - About',
    link: '/about',
  },
  {
    text: '04 - Contact',
    link: '/contact',
  },
]

export default Nav
