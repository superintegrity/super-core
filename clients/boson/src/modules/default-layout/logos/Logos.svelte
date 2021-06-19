<script lang="ts">
  import tpbSrc from './images/tpb.png';
  import cpaSrc from './images/cpa.png';
  import ipaSrc from './images/ipa.png';
  import smsfSrc from './images/smsf.png';

</script>

<div class="logos-root {$$props.class || ''}">
  <div class="top">
    <img src={tpbSrc} class="tax" alt="TPB" />
    <img src={cpaSrc} class="cpa" alt="CPA" />
    <img src={ipaSrc} class="ipa" alt="IPA" />
  </div>
  <div class="bottom">
    <img src={smsfSrc} class="smsf" alt="SMSF" />
  </div>
</div>

<style lang="scss">
  .logos-root {
    max-width: 30rem;
    /* border: 1px solid red; */

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 95%;
    }

    .bottom {
      margin-top: 10px;
    }

    img.tax {
      width: 65px;
    }
    img.cpa {
      width: 95px;
    }

    img.ipa {
      width: 70px;
    }

    img.smsf {
      width: 95%;
    }
  }

</style>
