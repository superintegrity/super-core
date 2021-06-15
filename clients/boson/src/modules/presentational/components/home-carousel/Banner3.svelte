<script lang="ts">
  import banner3Src from './images/banner-3.jpg';

</script>

<div class="banner3-root {$$props.class || ''}">
  <img src={banner3Src} alt="Banner 3" />
</div>

<style lang="scss">
  img {
    object-position: center 30%;
    object-fit: cover;
    width: 100%;
    height: 38vw;
    min-height: 300px;
    max-height: 680px;
  }

</style>
