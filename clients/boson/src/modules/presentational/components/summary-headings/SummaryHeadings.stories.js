import { setWrapper } from '../../../storybook'
import SummaryH1 from './SummaryH1.svelte'

export default {
  title: 'Presentational/SummaryHeadings',
}

export const H1 = () => {
  setTimeout(() => {
    setWrapper(`<div style="background-color:rgb(14, 15, 16);"></div>`)
  })

  return {
    Component: SummaryH1,
    props: {
      children: 'About Us',
    },
  }
}
