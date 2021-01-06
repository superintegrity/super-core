import NavBar from './NavBar.svelte'

export default {
  title: 'Presentational/NavBar',
  component: NavBar,
}

export const Default = () => SelectedHome()

export const SelectedHome = () => ({
  Component: NavBar,
  props: {
    routes: ROUTES,
  },
})

export const SelectedAbout = () => ({
  Component: NavBar,
  props: {
    routes: ROUTES,
    currentUrl: '/about',
  },
})

const ROUTES = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/service',
    title: 'Services',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
]
