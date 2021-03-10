<!-- <script lang="ts" ✂prettier:content✂="CiAgaW1wb3J0IHsgTWV0YSwgU3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL2FkZG9uLXN2ZWx0ZS1jc2YnOwogIGltcG9ydCB0eXBlIHsgSVJvdXRlIH0gZnJvbSAnLi9JUm91dGUnOwoKICBpbXBvcnQgTmF2QmFyMiBmcm9tICcuL05hdkJhcjIuc3ZlbHRlJzsKCiAgY29uc3QgUk9VVEVTOiBJUm91dGVbXSA9IFsKICAgIHsKICAgICAgdXJsOiAnLycsCiAgICAgIHRpdGxlOiAnSG9tZScsCiAgICB9LAogICAgewogICAgICB1cmw6ICcvc2VydmljZScsCiAgICAgIHRpdGxlOiAnU2VydmljZXMnLAogICAgfSwKICAgIHsKICAgICAgdXJsOiAnL2Fib3V0JywKICAgICAgdGl0bGU6ICdBYm91dCcsCiAgICB9LAogICAgewogICAgICB1cmw6ICcvY29udGFjdCcsCiAgICAgIHRpdGxlOiAnQ29udGFjdCcsCiAgICB9LAogIF07Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>

<Meta title="Presentational/NavBar3" component={NavBar2} />

<Story name="Default">
  <NavBar2 routes={ROUTES} />
</Story>

<Story name="SelectedAbout">
  <NavBar2 routes={ROUTES} currentUrl="/about" />
</Story> -->
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
