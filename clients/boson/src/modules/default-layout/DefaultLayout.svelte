<main>
  <header>
    <Logo />
    <NavBar class="nav" currentUrl={currentUrl} />
  </header>
  <slot />
  <footer>
    <AboutSummaryBox class="summary-box" />
    <ContactSummaryBox class="summary-box" />
  </footer>
</main>

<script lang="ts">
  import 'reset-css/reset.css'
  import { NavBar } from '../presentational'
  import AboutSummaryBox from '../presentational/components/about-summary-box/AboutSummaryBox.svelte'
  import ContactSummaryBox from '../presentational/components/contact-summary-box/ContactSummaryBox.svelte'
  import { Logo } from '../presentational/components/logo'
  import './layout.css'

  export let currentUrl: string | undefined
</script>

<style type="text/scss">
  header {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;

    :global(.nav) {
      margin-left: 200px;
      flex: 1;
    }
  }

  footer {
    margin-top: 80px;
    padding: 4rem 2rem;
    background-color: #0e0f10;

    display: flex;
    justify-content: space-around;

    :global(.summary-box) {
      max-width: 13rem;
    }
  }
</style>
