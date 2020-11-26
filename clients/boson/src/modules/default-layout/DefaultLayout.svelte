<main>
  <header>
    <Logo />
    <NavBar class="nav" currentUrl={currentUrl} />
  </header>
  <slot />
</main>

<script lang="ts">
  import 'reset-css/reset.css'
  import { NavBar } from '../presentational'
  import { Logo } from '../presentational/components/logo'
  import './layout.css'

  export let currentUrl: string | undefined
</script>

<style>
  header {
    display: flex;
  }

  header :global(.nav) {
    margin-left: 200px;
    flex: 1;
  }
</style>
