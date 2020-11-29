<div class="root {$$props.class || ''}">
  <img src={imageSrc} alt="blog" />
  <h1>{heading}</h1>
</div>

<script lang="ts">
  export let imageSrc: string
  export let heading: string
</script>

<style type="text/scss">
  .root {
    display: flex;
  }
</style>
