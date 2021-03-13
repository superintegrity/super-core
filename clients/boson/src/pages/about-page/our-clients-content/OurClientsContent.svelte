<script lang="ts">
  import { InfosGrid } from '../../../modules/presentational/components/infos-grid';
  import adviserImage from './images/adviser@3x.png';
  import smsfTrusteeImage from './images/smsf-trustee@3x.png';
</script>

<div class="our-clients-content-root {$$props.class || ''}">
  <InfosGrid>
    <div class="row">
      <div class="cell">
        <img src={adviserImage} alt="accountants" />
      </div>

      <div class="cell">
        <section class="description">
          <h1>Advisers & Accountants</h1>
          <p>
            Regardless of the size or stage of your SMSF business, we can assist
            in growing, expanding or maintaining it as your back office and
            technical support. Outsourcing your SMSF administration to us frees
            up your time to better focus on your core business activities. We
            also provide legislation and tax related factual information to help
            you resolve issues you may have with your SMSF clients.
          </p>
          <p>
            No matter whether your funds are new or established, we can either
            use your SMSF software to complete the work or transfer them to our
            software with no transfer fees.
          </p>
        </section>
      </div>
    </div>

    <div class="row">
      <div class="cell"><img src={smsfTrusteeImage} alt="trustees" /></div>

      <div class="cell">
        <section class="description">
          <h1>SMSF Trustees</h1>
          <p>
            Running an SMSF is not easy. It requires significant time and
            resources to comply with obligations and requirements on top of
            achieving the financial goals. With increased complexity of
            superannuation laws especially over the past few years, it can be
            quite overwhelming for someone even with finance or accounting
            background to cope with everything alone. Sometimes a small
            overlooked aspect can lead to serious compliance consequences.
          </p>
          <p>
            With our extensive experience and vast network of professionals in
            SMSF industry, we are able to help you manage your fund more
            efficiently and successfully. From execution-only setup to
            day-to-day administration and EOFY compliance work.
          </p>
        </section>
      </div>
    </div>
  </InfosGrid>
</div>

<style lang="scss">
  .our-clients-content-root {
  }

  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    max-height: 500px;
  }

  .description {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 116%;
    color: rgba(0, 0, 0, 0.69);
    margin-top: 1em;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 167%;
    color: rgba(0, 0, 0, 0.44);

    margin-top: 20px;
  }
</style>
