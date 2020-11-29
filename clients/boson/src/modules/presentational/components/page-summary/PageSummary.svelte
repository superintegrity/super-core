<div
  class="root {$$props.class || ''}"
  use:containerQuery={{ 'bp-medium': 600 }}>
  <h1>{heading}</h1>
  <p>{content}</p>
</div>

<script lang="ts">
  import { containerQuery } from '../../../container-query'

  export let heading: string
  export let content: string
</script>

<style type="text/scss">
  h1 {
    font-size: 2em;
    line-height: 1.5em;
    color: #03cce6;
    font-weight: 600;
  }

  p {
    font-size: 0.9em;
    color: #777777;
    line-height: 2em;
    letter-spacing: 1px;
    font-weight: 300;
  }

  .bp-medium {
    &.root {
      display: flex;
    }

    h1 {
      flex: 2;
    }

    p {
      margin-left: 40px;
      flex: 3;
    }
  }
</style>
