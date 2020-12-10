<h1 class="root {$$props.class || ''}">
  <slot>{children}</slot>
</h1>

<script lang="ts">
  export let children: string = ''
</script>

<style lang="scss">
  h1 {
    font-size: 1.3rem;
    color: #ffffff;
    letter-spacing: 1px;
    font-weight: 600;
  }
</style>
