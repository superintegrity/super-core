import BlogCard from './BlogCard.svelte'
import g7Src from './images/g7.jpg'

export default {
  title: 'Presentational/BlogCard',
  component: BlogCard,
}

export const Default = () => {
  return {
    Component: BlogCard,
    props: {
      imageSrc: g7Src,
      heading: 'Block Heading',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum. Vivamus at augue eget arcu dictum varius duis at consectetur.',
    },
  }
}
