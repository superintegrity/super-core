<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { H1 } from '../../modules/presentational/components/headings';
  import { ServiceCards } from '../../modules/presentational/components/service-cards';
  import { OurClientsContent } from './our-clients-content';
  import bannerSrc from './images/banner-about@3x.png';

  export let currentUrl = '/about';
</script>

<DefaultLayout currentUrl={currentUrl}>
  <div class="about-page-root">
    <img class="banner" src={bannerSrc} alt="about banner" />

    <section>
      <H1 class="h1">Our Services</H1>
      <ServiceCards />
    </section>

    <div class="our-clients-content-wrapper">
      <H1 class="h1">Our Clients</H1>
      <OurClientsContent />
    </div>
  </div>
</DefaultLayout>

<style lang="scss">
  .about-page-root {
    margin-bottom: 100px;

    img.banner {
      width: 100%;
      min-height: 220px;
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

    .our-clients-content-wrapper {
      margin-top: 100px;
    }
  }
</style>
