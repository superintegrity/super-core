<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import InfosGrid from './InfosGrid.svelte';
  import accountantImage from './images/accountant.jpg';
  import trusteeImage from './images/trustee.jpg';

</script>

<Meta
  title="Presentational/InfosGrid"
  component={InfosGrid}
  parameters={{
    docs: {
      iframeHeight: 1050,
    },
  }}
/>

<Story name="Default">
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
</Story>

<style>
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
    font-size: 2rem;
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
