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

<div class="root {$$props.class || ''}">
  <div class="icon">
    <svelte:component this={Icon} data={icon} scale={1.8} />
  </div>
  <h1>{heading}</h1>
  <p>{content}</p>
</div>

<style lang="scss">
  .root {
    background-color: #a3edf7;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2em 2em;
  }

  .icon {
    background-color: black;
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 1em;
  }

  h1 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.8em;
  }

  p {
    color: #083940;
    font-size: 0.9em;
    letter-spacing: 1px;
    font-weight: 300;
  }
</style>
