<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Logo from './Logo.svelte';
</script>

<Meta
  title="Presentational/Logo"
  component={Logo}
  parameters={{
    docs: {
      iframeHeight: 350,
    },
  }}
/>

<Story name="Default">
  <Logo />
</Story>
