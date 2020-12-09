<div
  class="root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
  <h1>{heading}</h1>

  <div class="content">
    {#if imageSrc}<img src={imageSrc} alt="content" />{/if}
    <p>{content}</p>
  </div>
</div>

<script lang="ts">
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../container-query'

  export let heading: string
  export let content: string
  export let imageSrc: string | undefined = undefined
</script>

<style type="text/scss">
  h1 {
    font-size: 1.2rem;
    line-height: 1.5em;
    color: #03cce6;
    font-weight: 600;
  }

  .content {
    margin-top: 2em;

    img {
      width: 100%;
    }

    p {
      font-size: 0.9rem;
      color: #777777;
      line-height: 2em;
      letter-spacing: 1px;
      font-weight: 300;

      margin-top: 2em;
    }
  }

  .bp-medium {
    &.root {
      display: flex;
      align-items: flex-start;
    }

    h1 {
      font-size: 2rem;
      flex: 2;
    }

    .content {
      margin-left: 5%;
      margin-top: 0;
      flex: 3;
    }
  }
</style>
