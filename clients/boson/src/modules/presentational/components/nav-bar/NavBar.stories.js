import NavBar from './NavBar.svelte'

export default {
  title: 'Presentational/NavBar',
  component: NavBar,
}

export const Default = () => SelectedHome()

export const SelectedHome = () => ({
  Component: NavBar,
})

export const SelectedAbout = () => ({
  Component: NavBar,
  props: {
    currentUrl: '/about',
  },
})
