<script lang="ts">
  import banner4Src from './images/banner-4.jpg';

</script>

<div class="banner4-root {$$props.class || ''}">
  <img src={banner4Src} alt="Banner 4" />
</div>

<style lang="scss">
  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    height: 38vw;
    min-height: 300px;
    max-height: 680px;
  }

</style>
