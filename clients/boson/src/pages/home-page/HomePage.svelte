<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import { HomeCarousel } from '../../modules/presentational/components/home-carousel';
  import { RecommendationCarousel } from '../../modules/presentational/components/recommendation-carousel';
  import { PageSummary } from '../../modules/presentational/components/page-summary';

  import { ServicesContent } from './services-content';
  import { InfosContent } from './infos-content';
</script>

<svelte:head>
  <title>Home | Super Integrity</title>
  <meta property="og:title" content="Home" />
  <meta name="twitter:title" content="Home" />
</svelte:head>

<DefaultLayout currentUrl="/">
  <div class="banner">
    <HomeCarousel />
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
        support for every aspect of your SMSF needs.
      </p>
    </PageSummary>
  </section>

  <div class="infos-content-wrapper">
    <InfosContent />
  </div>

  <section class="service-content-wrapper">
    <ServicesContent />
  </section>

  <div class="recommendation">
    <RecommendationCarousel />
  </div>
</DefaultLayout>

<style lang="scss">
  section {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
    padding-left: 5%;
    padding-right: 5%;
  }

  .infos-content-wrapper {
    margin-top: 100px;
  }

  .service-content-wrapper {
    max-width: 1200px;
  }

  .recommendation {
    margin-top: 100px;
  }

  p {
    /* text-align: justify; */
  }

  p + p {
    margin-top: 1.5em;
  }
</style>
