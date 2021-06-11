<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import HomeCarousel from './HomeCarousel.svelte';

</script>

<Meta
  title="Presentational/HomeCarousel"
  component={HomeCarousel}
  parameters={{
    docs: {
      iframeHeight: 1800,
    },
  }}
/>

<Story name="Default">
  <HomeCarousel />
</Story>
