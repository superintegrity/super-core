<script lang="ts">
  import { NavBar2 } from '../presentational/components/nav-bar2';
  import AboutSummaryBox from '../presentational/components/about-summary-box/AboutSummaryBox.svelte';
  import ContactSummaryBox from '../presentational/components/contact-summary-box/ContactSummaryBox.svelte';
  import { Logo } from '../presentational/components/logo';
  import Context from './Context.svelte';

  export let currentUrl: string | undefined;

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
</script>

<Context>
  <header>
    <Logo />
    <NavBar2 routes={ROUTES} class="nav" currentUrl={currentUrl} />
  </header>
  <main class="root {$$props.class || ''}">
    <slot />
  </main>
  <footer>
    <AboutSummaryBox class="summary-box" />
    <ContactSummaryBox class="summary-box" />
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
    margin-top: 100px;
    padding: 6em 3%;
    background-color: #0e0f10;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    :global(.summary-box) {
      min-width: 16rem;
      max-width: 23rem;
      margin-top: 3em;
      margin-left: 2%;
      margin-right: 2%;
    }
  }
</style>
