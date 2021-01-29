import { setWrapper } from '../../../storybook/setWrapper'
import InfoBox from './InfoBox.svelte'
import DefaultStory from './stories/DefaultStory.svelte'

export default {
  title: 'Presentational/InfoBox',
  component: InfoBox,
  parameters: {
    docs: {
      iframeHeight: 300,
    },
  },
}

export const Default = () => SmsfSetup()

export const SmsfSetup = () => {
  setTimeout(() => {
    setWrapper(`<div style="width: 320px"></div>`)
  })

  return {
    Component: DefaultStory,
  }
}
