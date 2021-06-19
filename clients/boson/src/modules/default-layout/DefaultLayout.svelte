<script lang="ts">
  import { NavBar2 } from '../presentational/components/nav-bar2';
  import AboutSummaryBox from '../presentational/components/about-summary-box/AboutSummaryBox.svelte';
  import ContactSummaryBox from '../presentational/components/contact-summary-box/ContactSummaryBox.svelte';
  import { Logo } from '../presentational/components/logo';
  import { Logos } from './logos';
  import { SiteMap } from './SiteMap';
  import Context from './Context.svelte';

  export let currentUrl: string | undefined;

  const ROUTES = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/service/',
      title: 'Services',
    },
    {
      url: '/about/',
      title: 'About',
    },
    {
      url: '/contact/',
      title: 'Contact',
    },
  ];

</script>

<Context>
  <header class="layout-header-root">
    <Logo />
    <NavBar2 routes={ROUTES} class="nav" currentUrl={currentUrl} />
  </header>
  <main class="layout-main-root {$$props.class || ''}">
    <slot />
  </main>
  <footer class="layout-footer-root">
    <div class="summary-boxes">
      <AboutSummaryBox class="summary-box" />
      <Logos class="summary-box" />
      <ContactSummaryBox class="summary-box" />
    </div>
    <SiteMap class="site-map" />
  </footer>
</Context>

<style lang="scss">
  header {
    margin: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    :global(.nav) {
      margin-left: 5%;
      flex: 1;
      max-width: 600px;
    }
  }

  footer {
    background-color: #0e0f10;
    padding: 6em 3%;
    .summary-boxes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      :global(.summary-box) {
        min-width: 16rem;
        max-width: 30rem;
        margin-top: 4em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }

    :global(.site-map) {
      margin-top: 4em;
      margin-left: 2%;
      margin-right: 2%;
    }

    img {
      width: 30rem;
      object-fit: scale-down;
    }
  }

</style>
