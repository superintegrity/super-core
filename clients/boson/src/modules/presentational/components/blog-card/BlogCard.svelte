<script lang="ts">
  import truncate from 'lodash/truncate';

  export let imageSrc: string;
  export let heading: string;
  export let summary: string;
</script>

<div class="root {$$props.class || ''}" data-aos="zoom-in">
  <div class="root-child image"><img src={imageSrc} alt="blog" /></div>
  <div class="root-child content">
    <h1>{heading}</h1>
    <p>{truncate(summary, { length: 128, separator: ' ' })}</p>
  </div>
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;

    margin-top: -28px;
    margin-left: -20px;
  }

  .root-child {
    margin-top: 28px;
    margin-left: 20px;
  }

  .image {
    flex: 1;
    min-width: 20rem;
    /* margin-top: 28px; */
  }

  img {
    width: 100%;
  }

  .content {
    flex: 3;
    min-width: 18rem;
  }

  h1 {
    font-size: 3rem;
    color: #03cce6;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    color: #777777;
    line-height: 2em;
    letter-spacing: 1px;
    font-weight: 300;
  }
</style>
