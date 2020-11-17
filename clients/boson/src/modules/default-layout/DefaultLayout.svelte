<script lang="ts">
  import 'reset-css/reset.css'
  import { NavBar } from '../presentational'
  import './layout.css'

  export let currentUrl: string | undefined
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <NavBar {currentUrl} />
  <slot />
</main>
