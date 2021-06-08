<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import OurServicesContent from './OurServicesContent.svelte';
</script>

<Meta
  title="Page/Service/OurServicesContent"
  component={OurServicesContent}
  parameters={{
    docs: {
      iframeHeight: 2400,
    },
  }}
/>

<Story name="Default">
  <OurServicesContent />
</Story>
