<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import AboutSummaryBox from './AboutSummaryBox.svelte';

</script>

<Meta
  title="Presentational/AboutSummaryBox"
  component={AboutSummaryBox}
  parameters={{
    docs: {
      iframeHeight: 300,
    },
}}
/>

<Story name="Default">
  <div class="container">
    <AboutSummaryBox />
  </div>
</Story>

<style lang="scss">
  .container {
    background-color: rgb(14, 15, 16);
  }

</style>
