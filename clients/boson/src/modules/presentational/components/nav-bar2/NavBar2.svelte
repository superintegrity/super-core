<script lang="ts">
  import { onMount } from 'svelte'
  let Icon: typeof import('svelte-awesome').default

  onMount(async () => {
    const module = await import('svelte-awesome')
    Icon = module.default
  })

  import { bars } from 'svelte-awesome/icons'
  import { NavItem2 } from '../nav-item2'
  import { parse } from 'uri-js'
  import type { IRoute } from './IRoute'
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
    getActiveBreakpointNames,
  } from '../../../container-query'
  import { slide } from 'svelte/transition'
  import { clickOutside } from '../../libs/clickOutsideAction'

  export let currentUrl = '/'
  export let routes: IRoute[] = []

  let clientWidth: number
  let bpClasses: string[] = []
  let menuShown = false
  let shouldAnimate = false

  $: {
    bpClasses = getActiveBreakpointNames({
      breakpointInfos: DEFAULT_BREAKPOINT_INFOS,
      clientWidth,
    })

    menuShown = bpClasses.includes('bp-medium')
    shouldAnimate = !bpClasses.includes('bp-medium')
  }
</script>

<div
  class="root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
  bind:clientWidth
  use:clickOutside
  on:clickOutside={() => {
    menuShown = bpClasses.includes('bp-medium') ? true : false
  }}>
  <button
    class="menu"
    on:click={() => {
      menuShown = !menuShown
    }}>
    <svelte:component this={Icon} data={bars} scale={2} />
  </button>

  {#if menuShown}
    <ul
      transition:slide={{ delay: 0, duration: shouldAnimate ? 300 : 0 }}
      class:shown={menuShown}>
      {#each routes as route}
        <NavItem2
          class={bpClasses}
          url={route.url}
          selected={parse(currentUrl).path === route.url}>
          {route.title}
        </NavItem2>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-end;
    position: relative;
  }

  .menu {
    background-color: white;
    border-radius: 4px;
    border: 1px solid rgba(188, 183, 183, 0.5);
    color: rgba(188, 183, 183, 0.8);
    padding: 5px 15px;
    margin: 10px 0;

    &:hover {
      background-color: rgba(188, 183, 183, 0.1);
    }

    &:active,
    &:focus {
      outline: 1px solid rgba(188, 183, 183, 0.2);
    }
  }

  ul {
    width: 100%;
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: white;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    top: 62px;
    z-index: 999;

    &.shown {
      display: flex;
    }
  }

  .bp-medium {
    .menu {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      position: relative;
      top: 0;
    }
  }
</style>
