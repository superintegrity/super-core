import BlogsContent from './BlogsContent.svelte'

export default {
  title: 'Page/Home/BlogsContent',
  component: BlogsContent,
}

export const Default = () => {
  return {
    Component: BlogsContent,
    props: {},
  }
}
