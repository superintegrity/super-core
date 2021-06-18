<script lang="ts">
  import { ServiceCard } from '../../../modules/presentational/components/service-card';

  import smsfSrc from './images/smsf.jpg';
  import adminSrc from './images/admin.jpg';
  import consultingSrc from './images/consulting.jpg';
  import documentSrc from './images/document.jpg';

</script>

<div class="our-services-content-root {$$props.class || ''}">
  <div id="smsf-setup" class="card">
    <ServiceCard imageSrc={smsfSrc} heading="SMSF Setup">
      We offer administration services to facilitate SMSF establishment process,
      including ABN and TFN application if required. We can help you obtain all
      the required documentation and guide you through the process step by step
      to ensure its legal compliance.
    </ServiceCard>
  </div>
  <div id="admin-compliance" class="card">
    <ServiceCard imageSrc={adminSrc} heading="Administration & EOFY Compliance">
      We take care of your day-to-day accounting and administration tasks,
      including monitoring contribution caps and pension minimum (and maximum
      where applicable) payment limits. We attend to end of financial year
      compliance work including full set of financial statements, tax return and
      arranging an independent annual audit.
    </ServiceCard>
  </div>
  <div id="consulting" class="card">
    <ServiceCard imageSrc={consultingSrc} heading="Consulting Services">
      We provide regulation and tax related factual information and technical
      support to help you keep up with legislation changes and meet compliance
      requirements. We work closely with trustees, financial advisers,
      accountants, and auditors to clarify issues and solve problems.
    </ServiceCard>
  </div>
  <div id="document" class="card">
    <ServiceCard imageSrc={documentSrc} heading="Document Services">
      We can help source legal documents and assist with the following on an
      execution-only basis:
      <ul>
        <li>Trust deed upgrade</li>
        <li>Pension documentation</li>
        <li>Limited recourse borrowing arrangement (LRBA)</li>
      </ul>
    </ServiceCard>
  </div>
</div>

<style lang="scss">
  .our-services-content-root {
  }

  .card + .card {
    margin-top: 32px;
  }

  ul {
    list-style: disc;
    list-style-position: outside;
    margin-left: 1.2em;
    margin-top: 0.8em;
  }

</style>
