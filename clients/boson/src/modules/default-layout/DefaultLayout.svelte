<main>
  <NavBar currentUrl="{currentUrl}" />

  <img src="{src}" alt="super-integrity" />
  <slot />
</main>

<script lang="ts">
  import src from './images/super-integrity.png'
  import 'reset-css/reset.css'
  import { NavBar } from '../presentational'
  import './layout.css'

  export let currentUrl: string | undefined
</script>

<style>
  img {
    width: 200px;
  }
</style>
