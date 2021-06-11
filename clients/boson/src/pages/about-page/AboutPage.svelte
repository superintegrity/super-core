<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { H1 } from '../../modules/presentational/components/headings';
  import { AboutUsContent } from './about-us-content';
  import bannerSrc from './images/banner-about@3x.png';

</script>

<DefaultLayout currentUrl="/about">
  <div class="about-page-root">
    <img class="banner" src={bannerSrc} alt="about banner" />

    <section>
      <H1 class="h1">About Us</H1>
      <AboutUsContent />
    </section>
  </div>
</DefaultLayout>

<style lang="scss">
  .about-page-root {
    margin-bottom: 100px;

    img.banner {
      width: 100%;
      min-height: 220px;
      height: 30vw;
      max-height: 600px;
      object-position: center top;
      object-fit: cover;
    }

    section {
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 5%;
      padding-right: 5%;
    }

    @media (max-width: 600px) {
      section {
        padding-left: 0;
        padding-right: 0;
      }
    }

    :global(.h1) {
      text-align: center;
      font-size: clamp(2.5rem, 5vw, 4.8rem);
      margin-bottom: clamp(20px, 5vw, 80px);
    }
  }

</style>
