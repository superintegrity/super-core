import ServicesContent from './ServicesContent.svelte'

export default {
  title: 'Page/Home/ServicesContent',
  component: ServicesContent,
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
    Component: ServicesContent,
  }
}

export const Desktop = () => {
  return {
    Component: ServicesContent,
  }
}
