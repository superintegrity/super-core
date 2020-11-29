<!-- Non visual common codes -->
<svelte:component this={ThemeWrapper} themes={themes}>
  <slot />
</svelte:component>

<script lang="ts">
  import 'reset-css/reset.css'
  import './layout.css'
  import { themes } from './themes'

  import { onMount } from 'svelte'
  let ThemeWrapper: typeof import('svelte-themer').ThemeWrapper

  onMount(async () => {
    const module = await import('svelte-themer')
    ThemeWrapper = module.ThemeWrapper
  })
</script>
