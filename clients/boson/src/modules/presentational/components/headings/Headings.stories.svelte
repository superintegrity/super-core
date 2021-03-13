<!-- import H1 from './H1.svelte'

export default {
  title: 'Presentational/Headings',
}

export const Default = () => {
  return {
    Component: H1,
    props: {
      children: 'Services',
    },
  }
} -->
<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import H1 from './H1.svelte';
</script>

<Meta title="Presentational/Headings" />

<Story name="Default">
  <H1>H1</H1>
</Story>
