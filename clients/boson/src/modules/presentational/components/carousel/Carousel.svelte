<div
  class="root {$$props.class || ''}"
  on:mouseenter={enter}
  on:mouseleave={leave}>
  <svelte:component
    this={Carousel}
    perPage={1}
    autoplay={3000}
    duration={500}
    bind:this={carousel}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>

    <div class="slide-content">
      <img src={banner1Src} alt="Banner 1" style="max-height:{maxHeight};" />
    </div>
    <div class="slide-content">
      <img src={banner2Src} alt="Banner 2" style="max-height:{maxHeight};" />
    </div>
    <div class="slide-content">
      <img src={banner3Src} alt="Banner 3" style="max-height:{maxHeight};" />
    </div>
    <div class="slide-content">
      <img src={banner4Src} alt="Banner 4" style="max-height:{maxHeight};" />
    </div>
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </svelte:component>
</div>

<script lang="ts">
  import type {
    default as SvelteCarousel,
    ICarousel,
  } from '@beyonk/svelte-carousel'

  import { onMount } from 'svelte'
  let Carousel: typeof SvelteCarousel

  onMount(async () => {
    const module = await import('@beyonk/svelte-carousel')
    Carousel = module.default
  })
  import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
  import banner1Src from './images/banner1.jpg'
  import banner2Src from './images/banner2.jpg'
  import banner3Src from './images/banner3.jpg'
  import banner4Src from './images/banner4.jpg'

  export let maxHeight = '680px'
  let carousel: ICarousel

  function enter() {
    carousel.pause()
  }

  function leave() {
    carousel.resume()
  }
</script>

<style lang="scss">
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
      object-position: center top;
      object-fit: cover;
      width: 100%;
      min-height: 300px;
    }
  }
</style>
