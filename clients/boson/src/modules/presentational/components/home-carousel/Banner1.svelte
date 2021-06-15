<script lang="ts">
  import banner1Src from './images/banner-1.jpg';

</script>

<div class="banner1-root {$$props.class || ''}">
  <div class="title">
    <p>SUPER INTEGRITY</p>
    <p>Trustworthy SMSF Accountants</p>
  </div>
  <img src={banner1Src} alt="Banner 1" />
</div>

<style lang="scss">
  .title {
    position: absolute;

    font-style: normal;
    font-weight: bold;
    line-height: 125%;

    font-size: clamp(1.8rem, 5vw, 4rem);
    margin-top: 1em;
    margin-left: 2em;
    margin-right: 2em;

    color: #ffffff;

    p + p {
      margin-top: 0.1em;
    }
  }

  img {
    object-position: center bottom;
    object-fit: cover;
    width: 100%;
    height: 38vw;
    min-height: 300px;
    max-height: 680px;
  }

  /* // Set by parent
  .bp-large {
    .title {
      font-size: 4rem;
      line-height: 118%;
    }
  } */

</style>
