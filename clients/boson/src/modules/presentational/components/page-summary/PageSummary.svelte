<script lang="ts">
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../container-query'

  export let heading: string
  export let children: string = ''
</script>

<div
  class="root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
  <h1>{heading}</h1>

  <div class="content">
    <slot>{children}</slot>
  </div>
</div>

<style lang="scss">
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 150%;
    color: #a9977b;
  }

  .content {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 167%;
    text-align: justify;
    color: rgba(0, 0, 0, 0.51);

    margin-top: 2em;
  }

  .bp-medium {
    &.root {
      display: flex;
      align-items: initial;
    }

    h1 {
      font-size: 3rem;
      flex: 2;
    }

    .content {
      font-size: 1.8rem;
      margin-left: 5%;
      margin-top: 0.4em;
      flex: 3;
    }
  }
</style>
