<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { H1 } from '../../modules/presentational/components/headings';
  import { getConfig } from '../../modules/config';
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../modules/container-query';
  import { ContactsContent } from './contacts-content';
  import bannerSrc from './images/banner-contact@3x.png';

  const { MAP_API_KEY } = getConfig();
  const mapMarker = '203-205 Blackburn Road, Mount Waverley VIC 3149';

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${encodeURIComponent(
    mapMarker,
  )}`;

</script>

<DefaultLayout currentUrl="/contact">
  <div
    class={false ? 'bp-medium' : ''}
    use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
  >
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
  img.banner {
    width: 100%;
    min-height: 220px;
    height: 30vw;
    max-height: 600px;
    object-position: center top;
    object-fit: cover;
  }

  section {
    margin-top: 60px;
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
    height: 250px;
  }

  .bp-medium {
    h1 {
      font-size: 2rem;
    }

    iframe {
      height: 350px;
    }
  }

</style>
