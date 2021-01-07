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
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../container-query'
  import banner1Src from './images/banner-1@3x.png'
  import banner2Src from './images/banner-2@3x.png'
  import banner3Src from './images/banner-3@3x.png'
  import banner4Src from './images/banner-4@3x.png'

  export let maxHeight = '680px'
  let carousel: ICarousel

  function enter() {
    carousel.pause()
  }

  function leave() {
    carousel.resume()
  }
</script>

<div
  class="carousel-root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
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
      <div class="title">
        <p>SUPER INTEGRITY</p>
        <p>Trustworthy SMSF Accountants</p>
      </div>
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

<style lang="scss">
  .carousel-root {
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
    position: relative;

    .title {
      position: absolute;

      font-style: normal;
      font-weight: bold;

      font-size: 2.5rem;
      margin-top: 1em;
      margin-left: 2em;
      margin-right: 2em;

      color: #ffffff;

      p + p {
        margin-top: 0.1em;
      }
    }

    img {
      object-position: center top;
      object-fit: cover;
      width: 100%;
      min-height: 300px;
    }
  }

  .bp-large {
    .slide-content {
      .title {
        font-size: 4rem;
        line-height: 118%;
      }
    }
  }
</style>
