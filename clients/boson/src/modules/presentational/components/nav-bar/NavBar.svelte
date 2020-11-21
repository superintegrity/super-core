<ul class="root">
  {#each routes as route}
    <NavItem
      url="{route.url}"
      selected="{parse(currentUrl).path === route.url}">
      {route.title}
    </NavItem>
  {/each}
</ul>

<script lang="ts">
  import NavItem from '../nav-item/NavItem.svelte'
  import { parse } from 'uri-js'
  import type { IRoute } from './IRoute'

  export let currentUrl = '/'
  let routes: IRoute[] = [
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
    {
      url: '/debug/app',
      title: 'Debug App',
    },
  ]
</script>

<style>
  .root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
