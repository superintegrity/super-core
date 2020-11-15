<script>
  import 'reset-css/reset.css'
  import { NavBar } from '../presentational'
  import './layout.css'
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <NavBar />
  <slot />
</main>
