import Banner from './Banner.svelte'

export default {
  title: 'Presentational/Banner',
  component: Banner,
  parameters: {
    docs: {
      iframeHeight: 300,
    },
  },
}

export const Default = () => {
  return {
    Component: Banner,
    props: {},
  }
}
