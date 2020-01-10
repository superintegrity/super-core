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
      <IoIosMenu size="32px" onClick={() => setIsOpen(true)} />
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
