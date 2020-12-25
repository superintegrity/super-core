<script lang="ts">
  export let children: string = '';
</script>

<h1 class="root {$$props.class || ''}">
  <slot>{children}</slot>
</h1>

<style lang="scss">
  .root {
    font-size: 2.2rem;
    font-weight: 500;
    color: #2c363e;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);
  }
</style>
