<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import SummaryH1 from './SummaryH1.svelte';

</script>

<Meta title="Presentational/SummaryHeadings" component={SummaryH1} />

<Story name="H1">
  <div class="container">
    <SummaryH1>About Us</SummaryH1>
  </div>
</Story>

<style lang="scss">
  .container {
    background-color: rgb(14, 15, 16);
  }

</style>
