<script lang="ts">
  import InfoBox from '../InfoBox.svelte'
  import smsfSetupSrc from './images/smsf-setup.png'
</script>

<InfoBox heading="SMSF Setup">
  <img slot="icon" src={smsfSetupSrc} alt="SMSF Setup" />
  <ul>
    <li>Step by step guide</li>
    <li>Full setup process support</li>
    <li>Quality documents & templates</li>
  </ul>
</InfoBox>

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
