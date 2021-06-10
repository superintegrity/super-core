<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ServicesContent from './ServicesContent.svelte';

</script>

<Meta
  title="Page/Home/ServicesContent"
  component={ServicesContent}
  parameters={{
    docs: {
      iframeHeight: 1000,
    },
  }}
/>

<Story name="Default">
  <ServicesContent />
</Story>
