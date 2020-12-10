<script lang="ts">
  import { NavBar } from '../presentational'
  import AboutSummaryBox from '../presentational/components/about-summary-box/AboutSummaryBox.svelte'
  import ContactSummaryBox from '../presentational/components/contact-summary-box/ContactSummaryBox.svelte'
  import { Logo } from '../presentational/components/logo'
  import Context from './Context.svelte'

  export let currentUrl: string | undefined
</script>

<Context>
  <header>
    <Logo />
    <NavBar class="nav" currentUrl={currentUrl} />
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
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;

    :global(.nav) {
      margin-left: 20%;
      flex: 1;
    }
  }

  footer {
    margin-top: 100px;
    padding: 3em 3% 0;
    background-color: #0e0f10;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    :global(.summary-box) {
      min-width: 10rem;
      max-width: 13rem;
      margin-bottom: 3em;
    }
  }
</style>
