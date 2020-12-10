<div class="root {$$props.class || ''}" data-aos="zoom-in">
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

<style lang="scss">
  .root {
    background-color: #f5f5f5;
    padding: 3em 2em;
  }

  .icon {
    color: var(--theme-primary-main, #03cce6);
  }

  h1 {
    font-size: 1.2rem;
    color: #333;
    margin: 1em 0;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    color: #777777;
    line-height: 2em;
    letter-spacing: 1px;
    font-weight: 300;
  }
</style>
