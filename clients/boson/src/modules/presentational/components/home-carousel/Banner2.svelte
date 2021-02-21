<script lang="ts">
  import banner2Src from './images/banner-2@3x.png'
</script>

<div class="banner2-root {$$props.class || ''}">
  <img src={banner2Src} alt="Banner 2" />
</div>

<style lang="scss">
  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    min-height: 300px;
  }
</style>
