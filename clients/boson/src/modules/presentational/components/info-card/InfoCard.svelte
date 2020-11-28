<section class="root {$$props.class}">
  <div class="icon">
    <svelte:component this={Icon} data={icon} scale={2.5} />
  </div>
  <h1>{heading}</h1>
  <p>{content}</p>
  <a href={detailUrl}>View details</a>
</section>

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
  export let detailUrl: string
</script>

<style>
  .root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--theme-primary-main);
    text-align: center;

    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;

    margin-top: 20px;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
    color: rgb(119, 119, 119);
    letter-spacing: 1px;
    line-height: 1.5rem;
    text-align: center;

    margin-top: 20px;
  }

  a {
    background-color: #333;
    border: 1px solid transparent;
    border-color: #ccc;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 0.9em;
    letter-spacing: 1px;
    text-decoration: none;

    margin-top: 20px;
    padding: 0.8em 1.5em;
  }
</style>
