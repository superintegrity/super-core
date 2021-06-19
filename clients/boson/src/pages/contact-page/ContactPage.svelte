<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { H1 } from '../../modules/presentational/components/headings';
  import { getConfig } from '../../modules/config';
  import { ContactsContent } from './contacts-content';
  import bannerSrc from './images/contact-banner.jpg';

  const { MAP_API_KEY } = getConfig();
  const mapMarker = '203-205 Blackburn Road, Mount Waverley VIC 3149';

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${encodeURIComponent(
    mapMarker,
  )}`;

</script>

<DefaultLayout currentUrl="/contact/">
  <div class="contract-page-root">
    <img class="banner" src={bannerSrc} alt="service banner" />

    <section class="map">
      <H1 class="h1">Contact Us</H1>
      <iframe title="address" src={mapSrc} />
    </section>

    <section class="contact-cards">
      <ContactsContent />
    </section>
  </div>
</DefaultLayout>

<style lang="scss">
  .contract-page-root {
    margin-bottom: 100px;

    img.banner {
      width: 100%;
      min-height: 220px;
      height: 38vw;
      max-height: 600px;
      object-position: center top;
      object-fit: cover;
    }

    section {
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      max-width: 1250px;

      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;

      padding-left: 5%;
      padding-right: 5%;

      &.map {
        padding-left: 0;
        padding-right: 0;
      }
    }

    :global(.h1) {
      text-align: center;
      font-size: clamp(2.5rem, 5vw, 4.8rem);
      margin-bottom: clamp(20px, 5vw, 80px);
    }

    iframe {
      width: 100%;
      height: clamp(250px, 100vw, 450px);
    }
  }

</style>
