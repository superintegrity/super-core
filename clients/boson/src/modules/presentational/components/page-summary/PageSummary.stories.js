import PageSummary from './PageSummary.svelte'
import DefaultStory from './stories/DefaultStory.svelte'

export default {
  title: 'Presentational/PageSummary',
  component: PageSummary,
  parameters: {
    docs: {
      iframeHeight: 550,
    },
  },
}

export const Default = () => Desktop()

export const Desktop = () => {
  return {
    Component: DefaultStory,
  }
}

export const Mobile = () => {
  setTimeout(() => {
    /** @type {HTMLDivElement?} */
    const rootElement = document.querySelector('#root')
    if (rootElement) {
      // rootElement.style.minHeight = '300px'
      rootElement.style.width = '320px'
    }
  })

  return {
    Component: DefaultStory,
  }
}
