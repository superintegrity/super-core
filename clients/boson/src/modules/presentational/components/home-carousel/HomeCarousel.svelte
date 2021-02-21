<script lang="ts">
  import { Carousel } from '../carousel'
  import Banner1 from './Banner1.svelte'
  import Banner2 from './Banner2.svelte'
  import Banner3 from './Banner3.svelte'
  import Banner4 from './Banner4.svelte'

  const contents = [
    {
      component: Banner1,
    },
    {
      component: Banner2,
    },
    {
      component: Banner3,
    },
    {
      component: Banner4,
    },
  ]
</script>

<Carousel contents={contents} />

<style lang="scss">
</style>
