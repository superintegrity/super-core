<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ServiceCards from './ServiceCards.svelte';
</script>

<Meta
  title="Presentational/ServiceCards"
  component={ServiceCards}
  parameters={{
    docs: {
      iframeHeight: 2400,
    },
  }}
/>

<Story name="Default">
  <ServiceCards />
</Story>
