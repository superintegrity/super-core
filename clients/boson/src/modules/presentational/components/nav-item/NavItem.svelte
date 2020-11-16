<script lang="ts">
  export let url = '/'
  export let selected = false

  export let slotContainerId: string | undefined = undefined
</script>

<style>
  a {
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  a.selected {
    background-color: gray;
  }
</style>

<li class="root">
  <a href={url} id={slotContainerId} class:selected>
    <slot />
  </a>
</li>
