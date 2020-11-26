import H1 from './H1.svelte'

export default {
  title: 'Presentational/Headings',
}

export const Default = () => {
  return {
    Component: H1,
    props: {
      children: 'Services',
    },
  }
}
