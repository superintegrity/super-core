<main>
  <NavBar currentUrl="{currentUrl}" />
  <slot />
</main>

<script lang="ts">
  import 'reset-css/reset.css'
  import { NavBar } from '../presentational'
  import './layout.css'

  export let currentUrl: string | undefined
</script>

<style>
</style>
