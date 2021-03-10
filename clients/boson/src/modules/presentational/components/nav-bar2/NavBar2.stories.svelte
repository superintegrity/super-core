<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  /** @type {import("./IRoute").IRoute[]} */
  const ROUTES = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/service',
      title: 'Services',
    },
    {
      url: '/about',
      title: 'About',
    },
    {
      url: '/contact',
      title: 'Contact',
    },
  ];

  import NavBar2 from './NavBar2.svelte';
</script>

<Meta
  title="Presentational/NavBar2"
  component={NavBar2}
  parameters={{
    docs: {
      iframeHeight: 350,
    },
  }}
/>

<Story name="Default">
  <NavBar2 routes={ROUTES} />
</Story>
