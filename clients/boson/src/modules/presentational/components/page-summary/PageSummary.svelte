<div class="root {$$props.class || ''}">
  <h1>{heading}</h1>
  <p>{content}</p>
</div>

<script lang="ts">
  export let heading: string
  export let content: string
</script>

<style type="text/scss">
  .root {
    display: flex;
  }

  h1 {
    font-size: 2em;
    line-height: 1.5em;
    color: #03cce6;
    font-weight: 600;

    flex: 2;
  }

  p {
    margin-left: 40px;
    font-size: 0.9em;
    color: #777777;
    line-height: 2em;
    letter-spacing: 1px;
    font-weight: 300;

    flex: 3;
  }
</style>
