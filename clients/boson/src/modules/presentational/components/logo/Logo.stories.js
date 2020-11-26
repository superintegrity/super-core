import Logo from './Logo.svelte'

export default {
  title: 'Presentational/Logo',
  component: Logo,
}

export const Default = () => {
  return {
    Component: Logo,
    props: {
    },
  }
}

