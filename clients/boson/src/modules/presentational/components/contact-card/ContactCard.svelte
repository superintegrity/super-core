<script lang="ts">
  import { onMount } from 'svelte';
  let Icon: typeof import('svelte-awesome').default;

  onMount(async () => {
    const module = await import('svelte-awesome');
    Icon = module.default;
  });

  export let icon: any;
  export let heading: string;
  export let children: string = '';

</script>

<div class="root {$$props.class || ''}">
  <div class="icon">
    <svelte:component this={Icon} data={icon} scale={1.6} />
  </div>
  <h1>{heading}</h1>
  <p>
    <slot>{children}</slot>
  </p>
</div>

<style lang="scss">
  .root {
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 3rem 2rem;
  }

  .icon {
    background-color: rgb(56, 59, 70);
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.8em;
  }

  p {
    color: #083940;
    font-size: 1.6rem;
    letter-spacing: 1px;
    font-weight: 300;
    text-align: center;
  }

</style>
