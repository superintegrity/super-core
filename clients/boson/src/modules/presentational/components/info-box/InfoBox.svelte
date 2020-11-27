<div class="root {$$props.class}">
  <div class="icon">
    <svelte:component this={Icon} data={icon} scale={3} />
  </div>
  <h1>{heading}</h1>
  <p>{content}</p>
</div>

<script lang="ts">
  import { onMount } from 'svelte'
  let Icon: typeof import('svelte-awesome').default

  onMount(async () => {
    const module = await import('svelte-awesome')
    Icon = module.default
  })

  export let icon: any
  export let heading: string
  export let content: string
</script>

<style>
  .root {
    background-color: #f5f5f5;
    padding: 4em 2em;
  }

  .icon {
    color: rgb(153, 139, 107);
  }

  h1 {
    font-size: 1.2em;
    color: #333;
    margin: 1em 0;
    font-weight: 600;
  }

  p {
    font-size: 0.9em;
    color: #777777;
    line-height: 2em;
    letter-spacing: 1px;
    font-weight: 300;
  }
</style>
