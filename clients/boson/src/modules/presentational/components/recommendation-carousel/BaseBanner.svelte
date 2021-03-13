<script lang="ts">
  import bannerSrc from './images/banner@3x.png';
  export let messageAuthor: string;
</script>

<div class="base-banner-root {$$props.class || ''}">
  <div class="message">
    <p>
      <slot />
    </p>
    <p class="name">{messageAuthor}</p>
  </div>
  <img src={bannerSrc} alt="Banner" />
</div>

<style lang="scss">
  .base-banner-root {
    .message {
      font-style: italic;
      font-weight: normal;
      font-size: clamp(1.5rem, 3vw, 2rem);
      line-height: 1.15;
      color: rgba(0, 0, 0, 0.69);
      background-color: rgba(255, 255, 255, 0.8);

      padding: 5%;

      width: clamp(200px, 70%, 800px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      position: absolute;
    }

    .name {
      padding-top: 20px;
      text-align: right;
    }

    img {
      object-position: center top;
      object-fit: cover;
      width: 100%;
      min-height: 300px;
    }
  }
</style>
