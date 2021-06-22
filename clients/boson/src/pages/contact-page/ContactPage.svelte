<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { H1 } from '../../modules/presentational/components/headings';
  import { ContactsContent } from './contacts-content';
  import bannerSrc from './images/contact-banner.jpg';
  // import { getConfig } from '../../modules/config';

  // const { MAP_API_KEY } = getConfig();
  // const mapMarker = '203-205 Blackburn Road, Mount Waverley VIC 3149';

  // const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
  //   mapMarker,
  // )}`;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.3632747689494!2d145.14749482919726!3d-37.873085198733826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x245b23ab3efbcd81!2sSUPER%20INTEGRITY!5e0!3m2!1sen!2sau!4v1624188872774!5m2!1sen!2sau`;
</script>

<svelte:head>
  <title>Contact | Super Integrity</title>
  <meta property="og:title" content="Contact" />
  <meta name="twitter:title" content="Contact" />
</svelte:head>

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
