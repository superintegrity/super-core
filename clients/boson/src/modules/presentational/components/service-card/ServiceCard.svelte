<script lang="ts">
  export let imageSrc: string;
  export let heading: string;
  export let children: string = '';
</script>

<div class="root {$$props.class || ''}" data-aos="zoom-in">
  <div class="root-child image"><img src={imageSrc} alt="service" /></div>
  <div class="root-child content">
    <h1>{heading}</h1>
    <p><slot>{children}</slot></p>
  </div>
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-content: stretch;
    align-items: stretch;
  }

  .image {
    flex: 1;
    min-width: 30rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .content {
    flex: 4;
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
    line-height: 139%;
    color: rgba(0, 0, 0, 0.38);

    margin-top: 30px;
  }
</style>
