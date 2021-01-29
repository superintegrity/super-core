<script lang="ts">
  import { onMount } from 'svelte'
  let Icon: typeof import('svelte-awesome').default

  onMount(async () => {
    const module = await import('svelte-awesome')
    Icon = module.default
  })

  export let icon: any = undefined
  export let heading: string
  export let children: string = ''
</script>

<div class="info-box-root {$$props.class || ''}" data-aos="zoom-in">
  <div class="icon">
    <slot name="icon">
      {#if icon}
        <svelte:component this={Icon} data={icon} scale={3} />
      {/if}
    </slot>
  </div>
  <h1>{heading}</h1>
  <div class="content">
    <slot>{children}</slot>
  </div>
</div>

<style lang="scss">
  .info-box-root {
    background-color: #f5f5f5;
    padding: 5rem min(10%, 4rem);
  }

  h1 {
    font-size: 2.4rem;
    color: #333;
    margin-top: 2.4rem;
    font-weight: 600;
  }
</style>
