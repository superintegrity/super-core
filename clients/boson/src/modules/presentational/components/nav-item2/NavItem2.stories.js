import { setWrapper } from '../../../storybook'
import NavItem2 from './NavItem2.svelte'

export default {
  title: 'Presentational/NavItem2',
  component: NavItem2,
}

export const Default = () => NotSelected()

export const NotSelected = () => {
  setTimeout(() => {
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem2,
    props: {
      children: 'About',
      class: 'bp-medium',
    },
  }
}

export const Selected = () => {
  setTimeout(() => {
    setWrapper(`<ul></ul>`)
  })

  return {
    Component: NavItem2,
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
    Component: NavItem2,
    props: {
      children: 'Home',
      selected: true,
    },
  }
}
