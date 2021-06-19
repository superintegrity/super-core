<script lang="ts">
  import { InfosGrid } from '../../../modules/presentational/components/infos-grid';
  import adviserImage from './images/adviser.jpg';
  import smsfTrusteeImage from './images/smsf.jpg';

</script>

<div class="our-clients-content-root {$$props.class || ''}">
  <InfosGrid>
    <div class="row">
      <div class="cell">
        <img src={adviserImage} alt="accountants" />
      </div>

      <div class="cell">
        <section id="advicers-accountants" class="description">
          <div>
            <h1>Advisers & Accountants</h1>
            <p>
              Regardless of the size or stage of your SMSF business, we can
              assist in growing, expanding or maintaining it as your back office
              and technical support. Outsourcing your SMSF administration to us
              frees up your time to better focus on your core business
              activities. We also provide legislation and tax related factual
              information to help you resolve issues you may have with your SMSF
              clients.
            </p>
            <p>
              No matter whether your funds are new or established, we can either
              use your SMSF software to complete the work or transfer them to
              our software with no transfer fees.
            </p>
          </div>
        </section>
      </div>
    </div>

    <div class="row">
      <div class="cell"><img src={smsfTrusteeImage} alt="trustees" /></div>

      <div class="cell">
        <section id="smsf-trustees" class="description">
          <div>
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
              efficiently and successfully. From initial setup to day-to-day
              administration and EOFY compliance work, our professional team
              will take care of it for you. We stay up to date in SMSF
              legislation changes and are always happy to share our views on any
              questions you may have.
            </p>
          </div>
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
    margin-left: max(20px, 10%);
    margin-right: max(20px, 10%);
    padding-bottom: 20px;

    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 116%;
    color: rgba(0, 0, 0, 0.69);
    margin-top: 1.5em;
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
