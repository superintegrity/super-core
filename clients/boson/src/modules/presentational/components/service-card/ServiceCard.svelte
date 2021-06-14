<script lang="ts">
  export let imageSrc: string;
  export let heading: string = '';
  export let children: string = '';

</script>

<div class="service-card-root {$$props.class || ''}">
  <div class="root-child image"><img src={imageSrc} alt="service" /></div>
  <div class="root-child content">
    {#if heading}
      <h1>{heading}</h1>
    {/if}
    <p><slot>{children}</slot></p>
  </div>
</div>

<style lang="scss">
  .service-card-root {
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-content: stretch;
    align-items: stretch;
  }

  .image {
    flex: 2;
    min-width: 30rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .content {
    flex: 5;
    min-width: 30rem;
    background-color: rgb(243, 243, 243);
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 5%;
    padding-right: 5%;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 104%;
    color: rgba(0, 0, 0, 0.76);
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 180%;
    color: rgba(0, 0, 0, 0.38);

    margin-top: 30px;
  }

</style>
