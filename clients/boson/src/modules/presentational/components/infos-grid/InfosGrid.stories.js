import InfosGrid from './InfosGrid.svelte'

export default {
  title: 'Presentational/InfosGrid',
  component: InfosGrid,
  parameters: {
    docs: {
      iframeHeight: 750,
    },
  },
}

export const Default = () => Mobile()

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
    Component: InfosGrid,
  }
}

export const Desktop = () => {
  return {
    Component: InfosGrid,
  }
}
