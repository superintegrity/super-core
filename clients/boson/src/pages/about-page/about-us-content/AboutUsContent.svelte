<script lang="ts">
  import { ServiceCard } from '../../../modules/presentational/components/service-card';

  import smsfSrc from './images/smsf@3x.png';

</script>

<div class="about-us-content-root {$$props.class || ''}">
  <div class="card">
    <ServiceCard imageSrc={smsfSrc} heading="SMSF Setup">
      We offer administration services to facilitate SMSF establishment process,
      including ABN and TFN application if required. We can help you obtain all
      the required documentation and guide you through the process step by step
      to ensure its legal compliance.
    </ServiceCard>
  </div>
</div>

<style lang="scss">
  .about-us-content-root {
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
