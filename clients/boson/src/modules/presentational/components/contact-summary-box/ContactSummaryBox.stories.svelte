<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ContactSummaryBox from './ContactSummaryBox.svelte';

</script>

<Meta
  title="Presentational/ContactSummaryBox"
  component={ContactSummaryBox}
  parameters={{
    docs: {
      iframeHeight: 300,
    },
  }}
/>

<Story name="Default">
  <div class="container">
    <ContactSummaryBox />
  </div>
</Story>

<style lang="scss">
  .container {
    background-color: rgb(14, 15, 16);
  }

</style>
