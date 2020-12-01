import BlogsContent from './BlogsContent.svelte'

export default {
  title: 'Home/BlogsContent',
  component: BlogsContent,
}

export const Default = () => {
  return {
    Component: BlogsContent,
    props: {},
  }
}
