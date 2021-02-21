<script lang="ts">
  import banner3Src from './images/banner-3@3x.png'
</script>

<div class="banner3-root {$$props.class || ''}">
  <img src={banner3Src} alt="Banner 3" />
</div>

<style lang="scss">
  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    min-height: 300px;
  }
</style>
