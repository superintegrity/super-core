<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout'
  import { Carousel } from '../../modules/presentational/components/carousel'
  import { PageSummary } from '../../modules/presentational/components/page-summary'

  import { ServicesContent } from './services-content'
  import { KeyPointsContent } from './key-points-content'
  import { InfosGrid } from '../../modules/presentational/components/infos-grid'
</script>

<DefaultLayout currentUrl="/">
  <div class="banner">
    <Carousel />
  </div>

  <section>
    <PageSummary heading="Support for every aspect of your SMSF needs">
      <p>
        As one of the most popular means of saving for retirement, self-managed
        super funds (SMSF) is often considered as the do-it-yourself option and
        as such an easily managed structure. In fact, SMSFs are complicated.
        They operate in a highly regulated environment with countless rules,
        compliance obligations and legislation updates, in which trustees and
        their professional advisers can easily get lost.
      </p>
      <p>
        We are dedicated SMSF specialists. With our accredited expertise at
        every level, we can help you establish your fund, manage your fund and
        stay on top of the super and tax laws. We prepare SMSF financial
        statements, tax return and arrange the independent audit. We look after
        all day-to-day administration tasks. We facilitate SMSF operations and
        prepare documents as instructed. We provide technical support and
        factual information on tax laws and superannuation rules. You have our
        support for every aspect of your SMSF needs
      </p>
    </PageSummary>
  </section>

  <div class="infos-grid-wrapper">
    <InfosGrid />
  </div>

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

  .infos-grid-wrapper {
    margin-top: 100px;
  }

  p + p {
    margin-top: 1.5em;
  }
</style>
