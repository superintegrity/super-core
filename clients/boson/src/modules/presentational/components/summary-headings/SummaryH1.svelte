<script lang="ts">
  export let children: string = '';
</script>

<h1 class="root {$$props.class || ''}">
  <slot>{children}</slot>
</h1>

<style lang="scss">
  h1 {
    font-size: 2.6rem;
    color: #ffffff;
    letter-spacing: 1.5px;
    font-weight: 600;
  }
</style>
