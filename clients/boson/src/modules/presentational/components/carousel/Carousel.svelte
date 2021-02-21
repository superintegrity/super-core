<script lang="ts">
  import type {
    default as SvelteCarousel,
    ICarousel,
  } from '@beyonk/svelte-carousel';

  import { onMount } from 'svelte';
  let Carousel: typeof SvelteCarousel;

  onMount(async () => {
    const module = await import('@beyonk/svelte-carousel');
    Carousel = module.default;
  });
  import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
    getActiveBreakpointNames,
  } from '../../../container-query';

  export let contents: {
    component: any;
  }[] = [];
  let carousel: ICarousel;

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }

  let clientWidth: number;
  let bpClasses: string[] = [];
  $: {
    bpClasses = getActiveBreakpointNames({
      breakpointInfos: DEFAULT_BREAKPOINT_INFOS,
      clientWidth,
    });
  }
</script>

<div
  class="carousel-root {$$props.class || ''}"
  bind:clientWidth
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
  on:mouseenter={enter}
  on:mouseleave={leave}
>
  <svelte:component
    this={Carousel}
    perPage={1}
    duration={500}
    bind:this={carousel}
  >
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>

    {#each contents as content}
      <div class="slide-content">
        <svelte:component
          this={content.component}
          class={bpClasses.join(' ')}
        />
      </div>
    {/each}
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </svelte:component>
</div>

<style lang="scss">
  .carousel-root {
    :global(ul) {
      margin-top: clamp(-60px, -10%, -40px) !important;
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
    max-height: 680px;
  }
</style>
