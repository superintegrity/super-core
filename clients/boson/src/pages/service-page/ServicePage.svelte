<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import bannerSrc from './images/services-banner.jpg';
  import { H1 } from '../../modules/presentational/components/headings';
  import { OurClientsContent } from './our-clients-content';
  import OurServicesContent from './our-services-content/OurServicesContent.svelte';
</script>

<svelte:head>
  <title>Services | Super Integrity</title>
  <meta property="og:title" content="Services" />
  <meta name="twitter:title" content="Services" />
</svelte:head>

<DefaultLayout currentUrl="/service/">
  <div class="service-page-root">
    <img class="banner" src={bannerSrc} alt="service banner" />

    <section>
      <H1 class="h1">Our Services</H1>
      <OurServicesContent />
    </section>

    <div class="our-clients-content-wrapper">
      <H1 class="h1">Our Clients</H1>
      <OurClientsContent />
    </div>
  </div>
</DefaultLayout>

<style lang="scss">
  .service-page-root {
    margin-bottom: 100px;

    img.banner {
      width: 100%;
      min-height: 220px;
      height: 38vw;
      max-height: 600px;
      object-position: center center;
      object-fit: cover;
    }

    section {
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      max-width: 1600px;
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
