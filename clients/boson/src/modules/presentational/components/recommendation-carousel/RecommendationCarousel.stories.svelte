<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import RecommendationCarousel from './RecommendationCarousel.svelte';

</script>

<Meta
  title="Presentational/RecommendationCarousel"
  component={RecommendationCarousel}
  parameters={{
    docs: {
      iframeHeight: 900,
    },
  }}
/>

<Story name="Default">
  <RecommendationCarousel />
</Story>
