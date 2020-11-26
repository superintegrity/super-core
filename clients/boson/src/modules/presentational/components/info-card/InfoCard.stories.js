import InfoCard from './InfoCard.svelte'
import { setWrapper } from '../../../storybook'
import { trophy, thumbsUp } from 'svelte-awesome/icons'

export default {
  title: 'Presentational/InfoCard',
  component: InfoCard,
}

export const Default = () => Design()

export const Design = () => {
  setTimeout(() => {
    setWrapper(`<div style="width: 320px"></div>`)
  })

  return {
    Component: InfoCard,
    props: {
      heading: 'Stylish Design',
      content:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      detailUrl: '/design',
      icon: trophy,
    },
  }
}

export const Support = () => {
  setTimeout(() => {
    setWrapper(`<div style="width: 320px"></div>`)
  })

  return {
    Component: InfoCard,
    props: {
      heading: 'Excellent Support',
      content:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      detailUrl: '/support',
      icon: thumbsUp,
    },
  }
}
