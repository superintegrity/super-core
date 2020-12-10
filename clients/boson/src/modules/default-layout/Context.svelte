<script lang="ts">
  import 'reset-css/reset.css'
  import './layout.css'
  import 'aos/dist/aos.css'
  import AOS from 'aos'

  import { onMount } from 'svelte'

  onMount(async () => {
    AOS.init({
      duration: 1200,
    })

    setTimeout(() => {
      AOS.refresh()
    }, 3000)
  })
</script>

<slot />
