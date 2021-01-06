<script lang="ts">
  import IconAndText from './images/icon-and-text.png'
</script>

<div class="logo-root {$$props.class || ''}">
  <img src={IconAndText} alt="logo" />
</div>

<style lang="scss">
  img {
    display: block;
    height: 100%;
  }
</style>
