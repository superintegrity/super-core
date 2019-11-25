import React, { useState } from 'react'
import { Root } from './styled'
import { Link } from 'gatsby'
import { IoIosMenu } from 'react-icons/io'
import { useClickOutside } from 'hook-click-outside'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const node = useClickOutside(toggleMenu)

  return (
    <Root ref={node} isOpen={isOpen}>
      <IoIosMenu size="32px" onClick={toggleMenu} />
      <ul>
        {menuItems.map(({ text, link }) => (
          <li>
            <Link to={link} activeClassName="active">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </Root>
  )
}

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
