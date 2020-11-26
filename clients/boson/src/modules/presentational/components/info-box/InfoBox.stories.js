import { setWrapper } from '../../../storybook/setWrapper'
import InfoBox from './InfoBox.svelte'
import { laptop } from 'svelte-awesome/icons'

export default {
  title: 'Presentational/InfoBox',
  component: InfoBox,
}

export const Default = () => Responsive()

export const Responsive = () => {
  setTimeout(() => {
    setWrapper(`<div style="width: 350px"></div>`)
  })

  return {
    Component: InfoBox,
    props: {
      heading: 'Fully Responsive',
      content:
        'Lorem ipsum dolor sit amet,vehicula vel sapien et, feugiat sapien amet.',
      detailUrl: '/about',
      icon: laptop,
    },
  }
}
