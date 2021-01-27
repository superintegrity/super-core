import BlogCard from './BlogCard.svelte'
import g7Src from './images/g7.jpg'

export default {
  title: 'Presentational/BlogCard',
  component: BlogCard,
  parameters: {
    docs: {
      iframeHeight: 500,
    },
  },
}

export const Default = () => Desktop()

export const Desktop = () => {
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

export const Mobile = () => {
  setTimeout(() => {
    /** @type {HTMLDivElement?} */
    const rootElement = document.querySelector('#root')
    if (rootElement) {
      // rootElement.style.minHeight = '300px'
      rootElement.style.width = '399px'
    }
  })

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
