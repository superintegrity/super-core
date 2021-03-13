<script lang="ts">
  import { DefaultLayout } from '../../modules/default-layout';
  import bannerSrc from './images/banner-service@3x.png';
  import { H1, H2 } from '../../modules/presentational/components/headings';
</script>

<DefaultLayout currentUrl="/service">
  <img class="banner" src={bannerSrc} alt="service banner" />

  <section>
    <H1>Advisors / Accountants</H1>
    <H2>Your own the clients We do the work</H2>
    <p>
      Regardless of the size or stage of your SMSF business, we can help. We can
      assist in developing, growing or maintaining it as your back office.
      Outsourcing your SMSF administration to us frees up your time to better
      focus on your core business activities. We also offer factual information
      advice to help you resolve any issues you may have with your SMSF clients.
    </p>
    <p>
      No matter whether your funds are new or existing clients, we can either
      log into your SMSF software to complete the work or transfer them to our
      software with no transfer fees.
    </p>
  </section>

  <section>
    <H1>Direct Trustees</H1>
    <H2>You manage the fund We provide support</H2>
    <p>
      With our extensive experience and network of other professionals in SMSF
      industry, we are able to help you manage your fund more efficiently and
      successfully. From execution-only setup to day-to-day administration tasks
      and end-of-year compliance work (financial statements, tax return and
      audit), our professional team will take care of it for you. We stay up to
      date in SMSF legislation changes and are always happy to share our view on
      any questions you may have.
    </p>
  </section>
</DefaultLayout>

<style lang="scss">
  img.banner {
    width: 100%;
    min-height: 220px;
    max-height: 600px;
    object-position: center top;
    object-fit: cover;
  }

  section {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    padding-left: 5%;
    padding-right: 5%;
  }

  p {
    line-height: 2em;
  }
</style>
