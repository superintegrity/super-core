import { setWrapper } from '../../../storybook'
import NavItem from './NavItem.svelte'

export default {
  title: 'Presentational/NavItem',
  component: NavItem,
}

export const Default = () => NotSelected()

export const NotSelected = () => {
  setTimeout(() => {
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem,
    props: {
      children: 'About Us',
      class: 'bp-medium',
    },
  }
}

export const Selected = () => {
  setTimeout(() => {
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem,
    props: {
      children: 'Home',
      selected: true,
      class: 'bp-medium',
    },
  }
}

export const SelectedMobile = () => {
  setTimeout(() => {
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem,
    props: {
      children: 'Home',
      selected: true,
    },
  }
}
