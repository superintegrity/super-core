<h1 class="root {$$props.class}">
  <slot>{children}</slot>
</h1>

<script lang="ts">
  export let children: string = ''
</script>

<style>
  .root {
    font-size: 2.8em;
    font-weight: 600;
    color: #2c363e;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);
  }
</style>
