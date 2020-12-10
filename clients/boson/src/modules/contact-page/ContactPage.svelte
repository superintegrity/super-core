<DefaultLayout currentUrl="/contact">
  <section>
    <h1>Contact Us</h1>
    <iframe title="address" src={mapSrc} />
  </section>
</DefaultLayout>

<script lang="ts">
  import { DefaultLayout } from '../default-layout'
  import { getConfig } from '../config'

  const { MAP_API_KEY } = getConfig()
  // const address = 'Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149'
  // const email = 'info@superintegrity.com.au'
  const mapMarker = '203-205 Blackburn Road, Mount Waverley VIC 3149'

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${encodeURIComponent(
    mapMarker,
  )}`
</script>

<style lang="scss">
  section {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    padding-left: 5%;
    padding-right: 5%;
  }

  iframe {
    width: 100%;
  }
</style>
