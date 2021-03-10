<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import InfosGrid from './InfosGrid.svelte';
</script>

<Meta
  title="Presentational/InfosGrid"
  component={InfosGrid}
  parameters={{
    docs: {
      iframeHeight: 850,
    },
  }}
/>

<Story name="Default">
  <InfosGrid />
</Story>
