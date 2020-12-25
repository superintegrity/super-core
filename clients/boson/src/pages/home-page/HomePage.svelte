<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout'
  import { Carousel } from '../../modules/presentational/components/carousel'
  import { PageSummary } from '../../modules/presentational/components/page-summary'

  import { ServicesContent } from './services-content'
  import { KeyPointsContent } from './key-points-content'
</script>

<DefaultLayout currentUrl="/">
  <div class="banner">
    <Carousel />
  </div>

  <section>
    <PageSummary
      heading="Support for every aspect of your SMSF"
      content="We can help you establish your SMSF, manage its day-to-day running and stay on top of the super and tax laws. We prepare SMSF financial statements, tax return and arrange the independent audit. We also help look after other administration tasks including monitoring contribution caps and pension minimum / maximum payment limits. " />
  </section>

  <section>
    <KeyPointsContent />
  </section>

  <section>
    <ServicesContent />
  </section>

  <!-- <section>
    <BlogsContent />
  </section> -->
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
