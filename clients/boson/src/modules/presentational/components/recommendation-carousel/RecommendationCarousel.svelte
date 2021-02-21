<script lang="ts">
  import { Carousel } from '../carousel'
  import Banner1 from './Banner1.svelte'
  import Banner2 from './Banner2.svelte'

  const contents = [
    {
      component: Banner1,
    },
    {
      component: Banner2,
    },
  ]
</script>

<Carousel contents={contents} />

<style lang="scss">
</style>
