<script lang="ts">
  import { ServiceCard } from '../../../modules/presentational/components/service-card';

  import dueDiligenceSrc from './images/due-diligence.jpg';
  import calculationSrc from './images/calculation.jpg';

</script>

<div class="about-us-content-root {$$props.class || ''}">
  <div class="card">
    <ServiceCard imageSrc={dueDiligenceSrc} image2Src={calculationSrc}>
      <p>
        We are registered tax agents, IPAs, CPAs and accredited SMSF specialist
        advisors. We have been working in SMSF industry for over 20 years. We do
        not deal with investment or financial products hence our advice is
        independent and commission-free. We do not outsource our work and they
        are all processed locally by fully qualified accountants with expertise
        and skills in SMSFs. When serving our clients, instead of treating each
        SMSF as merely a client reference number, we take a different approach
        by taking time to understand our clients and their needs. We take pride
        in providing excellent services at low prices with our ultimate business
        goal of meeting our clients’ needs and requirements at all levels. We
        maintain a practice with a consistent and uncompromising adherence to
        strong moral and professional values. <strong>
          “Integrity is the essence of everything successful.”
        </strong>
      </p>
      <p class="disclaimer">
        Disclaimer: We are not licensed to provide financial product advice
        under the Corporations Act. We do not provide financial advice or
        recommend if an SMSF is appropriate for your personal financial
        situation, particular objectives or needs. We recommend that you seek
        professional advice from an AFS licensee before making any decision to
        establish an SMSF or to purchase any financial product in an SMSF.
      </p>
    </ServiceCard>
  </div>
</div>

<style lang="scss">
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

  p {
    /* text-align: justify; */
  }

  p + p {
    margin-top: 3em;
  }

  .disclaimer {
    font-style: italic;
    font-size: 1.3rem;
    line-height: 130%;
  }

</style>
