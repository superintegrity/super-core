import NavBar2 from './NavBar2.svelte'

export default {
  title: 'Presentational/NavBar2',
  component: NavBar2,
  parameters: {
    docs: {
      iframeHeight: 400,
    },
  },
}

export const Default = () => SelectedHome()

export const SelectedHome = () => ({
  Component: NavBar2,
  props: {
    routes: ROUTES,
  },
})

export const SelectedHomeMobile = () => {
  setTimeout(() => {
    /** @type {HTMLDivElement?} */
    const rootElement = document.querySelector('#root')
    if (rootElement) {
      // rootElement.style.minHeight = '300px'
      rootElement.style.width = '599px'
    }
  })

  return {
    Component: NavBar2,
    props: {
      routes: ROUTES,
    },
  }
}

export const SelectedAbout = () => ({
  Component: NavBar2,
  props: {
    routes: ROUTES,
    currentUrl: '/about',
  },
})

/** @type {import('./IRoute').IRoute[]} */
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
