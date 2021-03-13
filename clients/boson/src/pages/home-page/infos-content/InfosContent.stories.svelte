<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import InfosContent from './InfosContent.svelte';
</script>

<Meta
  title="Page/Home/InfosContent"
  component={InfosContent}
  parameters={{
    docs: {
      iframeHeight: 850,
    },
  }}
/>

<Story name="Default">
  <InfosContent />
</Story>
