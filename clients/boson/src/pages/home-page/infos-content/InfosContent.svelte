<script lang="ts">
  import { InfosGrid } from '../../../modules/presentational/components/infos-grid';
  import accountantImage from './images/accountant@3x.png';
  import trusteeImage from './images/trustee@3x.png';
</script>

<div class="infos-content-root {$$props.class || ''}">
  <InfosGrid>
    <div class="row">
      <div class="cell">
        <img src={accountantImage} alt="accountants" />
      </div>

      <div class="cell">
        <section class="description">
          <h1>Advisers & Accountants</h1>
          <ul>
            <li>Back office & technical support</li>
            <li>Opportunities of business expansion</li>
            <li>Flexible software options & free transfer</li>
          </ul>
        </section>
      </div>
    </div>

    <div class="row">
      <div class="cell"><img src={trusteeImage} alt="trustees" /></div>

      <div class="cell">
        <section class="description">
          <h1>SMSF Trustees</h1>
          <ul>
            <li>Professional guidance & ongoing support</li>
            <li>Independent advice & second opinion</li>
            <li>Go-to person & ad-hoc enquiries</li>
          </ul>
        </section>
      </div>
    </div>
  </InfosGrid>
</div>

<style lang="scss">
  .infos-content-root {
  }

  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
  }

  .description {
    margin-left: max(20px, 10%);
    margin-right: max(20px, 10%);
    padding-bottom: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 116%;
    color: rgba(0, 0, 0, 0.69);
    margin-top: 1em;
  }

  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.44);
    margin-top: 1em;
    margin-bottom: 1em;
  }

  li {
    margin-top: 0.6em;
  }
</style>
