import PageSummary from './PageSummary.svelte'
import aboutImageSrc from './images/about.png'

export default {
  title: 'Presentational/PageSummary',
  component: PageSummary,
}

export const Default = () => NoImage()

export const NoImage = () => {
  return {
    Component: PageSummary,
    props: {
      heading: 'We help our customer to build Digital World',
      content:
        'Maecenas quis neque libero. Class aptent taciti.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.',
    },
  }
}

export const WithImage = () => {
  return {
    Component: PageSummary,
    props: {
      heading: 'We help our customer to build Digital World',
      content:
        'Maecenas quis neque libero. Class aptent taciti.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.',
      imageSrc: aboutImageSrc,
    },
  }
}
