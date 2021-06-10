<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import AboutUsContent from './AboutUsContent.svelte';

</script>

<Meta
  title="Page/Service/AboutUsContent"
  component={AboutUsContent}
  parameters={{
    docs: {
      iframeHeight: 2400,
    },
  }}
/>

<Story name="Default">
  <AboutUsContent />
</Story>
