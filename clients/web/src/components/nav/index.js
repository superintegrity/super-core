import React, { useState, useRef } from 'react'
import { Root } from './styled'
import { Link } from 'gatsby'
import { IoIosMenu } from 'react-icons/io'
import { useClickAway } from 'react-use'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)
  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <Root ref={ref} isOpen={isOpen}>
      <IoIosMenu
        className="menu-icon"
        size="32px"
        onClick={() => setIsOpen(true)}
      />
      <ul className="menu">
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
    text: 'Home',
    link: '/',
  },
  {
    text: 'Services',
    link: '/services',
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Contact',
    link: '/contact',
  },
]
