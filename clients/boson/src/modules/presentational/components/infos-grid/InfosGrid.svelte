<script lang="ts">
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../container-query';
</script>

<div
  class="infos-grid-root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
>
  <slot />
</div>

<style lang="scss">
  .infos-grid-root {
    background-color: rgb(245, 245, 245);

    :global(.row) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    :global(.cell) {
      flex: 1;
      min-width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.bp-medium {
      :global(.row:nth-child(odd) .cell:nth-child(1)) {
        order: 2;
      }

      :global(.row:nth-child(odd) .cell:nth-child(2)) {
        order: 1;
      }
    }
  }
</style>
