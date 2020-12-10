<script lang="ts">
  import { DefaultLayout } from '../default-layout'
  import { Banner } from '../presentational/components/banner'
  import { getConfig } from '../config'
  import { containerQuery, DEFAULT_BREAKPOINT_INFOS } from '../container-query'

  const { MAP_API_KEY } = getConfig()
  // const address = 'Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149'
  // const email = 'info@superintegrity.com.au'
  const mapMarker = '203-205 Blackburn Road, Mount Waverley VIC 3149'

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${encodeURIComponent(
    mapMarker,
  )}`
</script>

<DefaultLayout currentUrl="/contact">
  <div
    class={false ? 'bp-medium' : ''}
    use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
    <Banner />

    <section class="map">
      <h1>Contact Us</h1>
      <iframe title="address" src={mapSrc} />
    </section>
  </div>
</DefaultLayout>

<style lang="scss">
  section {
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c363e;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);
    margin-bottom: 30px;
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
