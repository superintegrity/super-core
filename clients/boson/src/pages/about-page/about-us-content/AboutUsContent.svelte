<script lang="ts">
  import { ServiceCard } from '../../../modules/presentational/components/service-card';

  import dueDiligenceSrc from './images/due-diligence@3x.png';

</script>

<div class="about-us-content-root {$$props.class || ''}">
  <div class="card">
    <ServiceCard imageSrc={dueDiligenceSrc}>
      We are registered tax agents, IPAs, CPAs and accredited SMSF specialist
      advisors. We have been working in SMSF industry for over 20 years. We do
      not deal with investment or financial products hence our advice is
      independent and commission-free. We do not outsource our work and they are
      all processed locally by fully qualified accountants with expertise and
      skills in SMSFs. When serving our clients, instead of treating each SMSF
      as merely a client reference number, we take a different approach by
      taking time to understand our clients and their needs. We take pride in
      providing excellent services at low prices with our ultimate business goal
      of providing support to meet our clients’ needs and requirements at all
      levels. we maintain a practice of being honest and a consistent and
      uncompromising adherence to strong moral and professional values.
      <strong>Integrity is the essence of everything successful.</strong>
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

  strong {
    font-weight: bold;
  }

</style>
