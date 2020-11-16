import { setWrapper, setSlot } from '../../../storybook'
import NavItem from './NavItem.svelte'
import { v4 as uuidv4 } from 'uuid'

export default {
  title: 'Presentational/NavItem',
  component: NavItem,
}

export const Default = () => {
  const slotContainerId = `s-${uuidv4().substr(0, 8)}`

  setTimeout(() => {
    setSlot(slotContainerId, `<strong>Home</strong>`)
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem,
    props: {
      slotContainerId,
    },
  }
}

export const Selected = () => {
  const slotContainerId = `s-${uuidv4().substr(0, 8)}`

  setTimeout(() => {
    setSlot(slotContainerId, `<strong>About Us</strong>`)
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem,
    props: {
      slotContainerId,
      selected: true,
    },
  }
}
