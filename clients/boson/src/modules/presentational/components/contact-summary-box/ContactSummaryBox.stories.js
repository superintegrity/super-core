import { setWrapper } from '../../../storybook'
import ContactSummaryBox from './ContactSummaryBox.svelte'

export default {
  title: 'Presentational/ContactSummaryBox',
  component: ContactSummaryBox,
}

export const Default = () => {
  setTimeout(() => {
    setWrapper(
      `<div style="width: 210px; background-color:rgb(14, 15, 16);"></div>`,
    )
  })

  return {
    Component: ContactSummaryBox,
    props: {},
  }
}
