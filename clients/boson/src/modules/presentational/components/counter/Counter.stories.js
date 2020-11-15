import Counter from './Counter.svelte'

export default {
  title: 'Presentational/Counter',
  component: Counter,
}

export const Default = () => ({
  Component: Counter,
  props: {},
})

export const HasInitialCount = () => ({
  Component: Counter,
  props: {
    count: 11,
  },
})
