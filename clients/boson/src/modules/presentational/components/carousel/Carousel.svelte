<div class="root {$$props.class}">
  <svelte:component this={Carousel} perPage={1} autoplay={3000} duration={500}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>

    <div class="slide-content"><img src={banner1Src} alt="Banner 1" /></div>
    <div class="slide-content"><img src={banner2Src} alt="Banner 2" /></div>
    <div class="slide-content"><img src={banner3Src} alt="Banner 3" /></div>
    <div class="slide-content"><img src={banner4Src} alt="Banner 4" /></div>
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </svelte:component>
</div>

<script lang="ts">
  import { onMount } from 'svelte'
  let Carousel: typeof import('@beyonk/svelte-carousel').default

  onMount(async () => {
    const module = await import('@beyonk/svelte-carousel')
    Carousel = module.default
  })
  import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
  import banner1Src from './images/banner1.jpg'
  import banner2Src from './images/banner2.jpg'
  import banner3Src from './images/banner3.jpg'
  import banner4Src from './images/banner4.jpg'
</script>

<style type="text/scss">
  .root {
    :global(ul) {
      margin-top: -100px !important;
    }

    :global(ul li) {
      width: 15px !important;
      height: 15px !important;
      margin: 10px !important;

      &.active {
        background-color: #03cce6 !important;
      }
    }
  }

  .control {
    color: #ffffffd8;
  }

  .slide-content {
    img {
      width: 100%;
    }
  }
</style>
