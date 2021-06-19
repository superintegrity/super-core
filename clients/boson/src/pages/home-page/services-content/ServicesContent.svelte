<script lang="ts">
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../modules/container-query';
  import { H1 } from '../../../modules/presentational/components/headings';
  import { InfoBox } from '../../../modules/presentational/components/info-box';
  import smsfSetupSrc from './images/smsf-setup2.png';
  import adminSrc from './images/admin2.png';
  import consultingSrc from './images/consulting2.png';
  import documentSrc from './images/document2.png';

</script>

<div
  class="service-content-root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
>
  <H1 class="h1">Our Services</H1>

  <div class="info-boxes">
    <InfoBox class="info-box" url="/service/#smsf-setup" heading="SMSF Setup">
      <img slot="icon" src={smsfSetupSrc} alt="SMSF Setup" />
      <ul>
        <li>Step by step guide</li>
        <li>Full setup process support</li>
        <li>Quality documents & templates</li>
      </ul>
    </InfoBox>
    <InfoBox
      class="info-box"
      url="/service/#admin-compliance"
      heading="Admin & Compliance"
    >
      <img slot="icon" src={adminSrc} alt="Admin & Compliance" />
      <ul>
        <li>All essential admin tasks</li>
        <li>Free SMSF transfer services</li>
        <li>EOFY Financials, tax return and audit</li>
      </ul>
    </InfoBox>
    <InfoBox
      class="info-box"
      url="/service/#consulting"
      heading="Consulting Services"
    >
      <img slot="icon" src={consultingSrc} alt="Consulting Services" />
      <ul>
        <li>Super & tax law information</li>
        <li>Go-to person & ad-hoc enquiries</li>
        <li>Independent advice & second opinion</li>
      </ul>
    </InfoBox>
    <InfoBox
      class="info-box"
      url="/service/#document"
      heading="Document Services"
    >
      <img slot="icon" src={documentSrc} alt="Document Services" />
      <ul>
        <li>Trust deed upgrade</li>
        <li>Pension documentation</li>
        <li>SMSF borrowing documents (LRBA)</li>
      </ul>
    </InfoBox>
  </div>
</div>

<style lang="scss">
  .info-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;

    :global(.info-box) {
      flex: 1;
      min-width: 28rem;
      margin-top: 20px;
      margin-left: 20px;
    }
  }

  img {
    width: 40px;
  }

  .service-content-root {
    :global(.h1) {
      text-align: center;
      font-size: clamp(2.5rem, 5vw, 4.8rem);
      margin-bottom: clamp(20px, 5vw, 80px);
    }
  }

  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.44);
    margin-top: 30px;
  }

  li {
    margin-top: 0.6em;
  }

  .bp-medium {
    .info-boxes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      :global(.info-box) {
        min-width: 40%;
      }
    }
  }

</style>
