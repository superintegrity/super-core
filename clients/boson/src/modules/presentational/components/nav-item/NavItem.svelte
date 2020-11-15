<script lang="ts">
  export let url = '/'
</script>

<style>
  a {
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
</style>

<li class="root">
  <a href={url}>
    <slot />
  </a>
</li>
