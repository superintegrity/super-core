<script lang="ts">
  export let children: string = ''
</script>

<h1 class="root {$$props.class || ''}">
  <slot>{children}</slot>
</h1>

<style lang="scss">
  .root {
    font-style: normal;
    font-weight: bold;
    font-size: 4.8rem;

    color: rgba(0, 0, 0, 0.74);
  }
</style>
