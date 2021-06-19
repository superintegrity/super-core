<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { H1 } from '../../modules/presentational/components/headings';
  import { AboutUsContent } from './about-us-content';
  import bannerSrc from './images/banner.jpg';
  import bottomBannerSrc from './images/bottom-banner.jpg';

  // It caused bug: navigate from /about to /service shows blank
  // import type { default as SvelteImage } from 'svelte-image';

  // import { onMount } from 'svelte';
  // let Image: typeof SvelteImage;

  // onMount(async () => {
  //   const module = await import('svelte-image');
  //   Image = module.default;
  // });

</script>

<DefaultLayout currentUrl="/about/">
  <div class="about-page-root">
    <!-- It caused bug: navigate from /about to /service shows blank -->
    <!-- <svelte:component this={Image} class="banner" src={bannerSrc} alt="about banner" /> -->
    <img src={bannerSrc} class="banner" alt="about banner" />

    <section class="top-section">
      <H1 class="h1">About Us</H1>
      <AboutUsContent />
    </section>

    <div class="bottom-banner-wrapper">
      <img
        class="bottom-banner"
        src={bottomBannerSrc}
        alt="about bottom banner"
      />
    </div>
  </div>
</DefaultLayout>

<style lang="scss">
  .about-page-root {
    img.banner {
      width: 100%;
      min-height: 220px;
      height: 38vw;
      max-height: 600px;
      object-position: center 30%;
      object-fit: cover;
    }

    .top-section {
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      max-width: 1400px;
      padding-left: 5%;
      padding-right: 5%;
      margin-bottom: 200px;
    }

    @media (max-width: 600px) {
      .top-section {
        padding-left: 0;
        padding-right: 0;
      }
    }

    :global(.h1) {
      text-align: center;
      font-size: clamp(2.5rem, 5vw, 4.8rem);
      margin-bottom: clamp(20px, 5vw, 80px);
    }

    img.bottom-banner {
      width: 100%;
      min-height: 220px;
      max-height: 500px;
      object-position: center top;
      object-fit: cover;

      margin-bottom: -3px;
    }
  }

</style>
