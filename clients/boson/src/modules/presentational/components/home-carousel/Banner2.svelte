<script lang="ts">
  import banner2Src from './images/banner-2.jpg';

</script>

<div class="banner2-root {$$props.class || ''}">
  <img src={banner2Src} alt="Banner 2" />
</div>

<style lang="scss">
  img {
    object-position: center center;
    object-fit: cover;
    width: 100%;
    height: 38vw;
    min-height: 300px;
    max-height: 680px;
  }

</style>
