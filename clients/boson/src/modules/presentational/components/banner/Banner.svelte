<script lang="ts">
  import defaultBannerSrc from './images/banner.jpg'
  export let bannerSrc: string = defaultBannerSrc
</script>

<div class="root {$$props.class || ''}">
  <div class="overlay" />
  <img src={bannerSrc} alt="banner" />
</div>

<style lang="scss">
  .root {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.3;
  }

  img {
    width: 100%;
    min-height: 120px;
    max-height: 220px;
    object-position: center top;
    object-fit: cover;
  }
</style>
