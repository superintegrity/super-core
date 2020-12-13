<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout'
  import { PageSummary } from '../../modules/presentational/components/page-summary'
  import { Banner } from '../../modules/presentational/components/banner'
  import summaryImageSrc from './images/summary.png'
  import { KeyPointsContent } from './key-points-content'
</script>

<DefaultLayout currentUrl="/service">
  <Banner />
  <section>
    <PageSummary
      imageSrc={summaryImageSrc}
      heading="We help our customer to build Digital World"
      content="Maecenas quis neque libero. Class aptent taciti.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac." />
  </section>

  <section>
    <KeyPointsContent />
  </section>
</DefaultLayout>

<style lang="scss">
  section {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
