<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import InfoBox from './InfoBox.svelte';
  import smsfSetupSrc from './images/smsf-setup.png';

</script>

<Meta
  title="Presentational/InfoBox"
  component={InfoBox}
  parameters={{
    docs: {
      iframeHeight: 300,
    },
  }}
/>

<Story name="Default">
  <InfoBox url="/services" heading="SMSF Setup">
    <img slot="icon" src={smsfSetupSrc} alt="SMSF Setup" />
    <ul>
      <li>Step by step guide</li>
      <li>Full setup process support</li>
      <li>Quality documents & templates</li>
    </ul>
  </InfoBox>
</Story>

<style lang="scss">
  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.44);
    margin-top: 1em;
  }

  li {
    margin-top: 0.6em;
  }

</style>
