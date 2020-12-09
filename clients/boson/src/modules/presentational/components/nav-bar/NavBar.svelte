<div class="root {$$props.class}" use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
  <button
    class="menu"
    on:click={() => {
      menuShown = !menuShown
    }}>
    <svelte:component this={Icon} data={bars} scale={2} />
  </button>
  <ul class:shown={menuShown}>
    {#each routes as route}
      <NavItem url={route.url} selected={parse(currentUrl).path === route.url}>
        {route.title}
      </NavItem>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { onMount } from 'svelte'
  let Icon: typeof import('svelte-awesome').default

  onMount(async () => {
    const module = await import('svelte-awesome')
    Icon = module.default
  })

  import { bars } from 'svelte-awesome/icons'
  import NavItem from '../nav-item/NavItem.svelte'
  import { parse } from 'uri-js'
  import type { IRoute } from './IRoute'
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../container-query'

  export let currentUrl = '/'

  let menuShown = false
  const routes: IRoute[] = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/service',
      title: 'Services',
    },
    {
      url: '/about',
      title: 'About',
    },
    {
      url: '/blog',
      title: 'Blog',
    },
    {
      url: '/contact',
      title: 'Contact',
    },
  ]
</script>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-end;
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
    }
  }
</style>
