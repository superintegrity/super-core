<div class="root {$$props.class || ''}">
  <img src={imageSrc} alt="blog" />
  <div class="content">
    <h1>{heading}</h1>
    <p>{truncate(summary, { length: 128, separator: ' ' })}</p>
  </div>
</div>

<script lang="ts">
  import truncate from 'lodash/truncate'

  export let imageSrc: string
  export let heading: string
  export let summary: string
</script>

<style type="text/scss">
  .root {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
  }

  img {
    width: 30%;
  }

  .content {
    width: 65%;
  }

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
</style>
