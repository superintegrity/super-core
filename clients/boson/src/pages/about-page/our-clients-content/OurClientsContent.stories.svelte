<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import OurClientsContent from './OurClientsContent.svelte';
</script>

<Meta
  title="Page/About/OurClientsContent"
  component={OurClientsContent}
  parameters={{
    docs: {
      iframeHeight: 1850,
    },
  }}
/>

<Story name="Default">
  <OurClientsContent />
</Story>
