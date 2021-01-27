import { setWrapper } from '../../../storybook'
import AboutSummaryBox from './AboutSummaryBox.svelte'

export default {
  title: 'Presentational/AboutSummaryBox',
  component: AboutSummaryBox,
  parameters: {
    docs: {
      iframeHeight: 300,
    },
  },
}

export const Default = () => About()

export const About = () => {
  setTimeout(() => {
    setWrapper(
      `<div style="width: 210px; background-color:rgb(14, 15, 16);"></div>`,
    )
  })

  return {
    Component: AboutSummaryBox,
    props: {},
  }
}
