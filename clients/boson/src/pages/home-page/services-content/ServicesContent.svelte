<script lang="ts">
  import { laptop } from 'svelte-awesome/icons'
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../modules/container-query'
  import { H1 } from '../../../modules/presentational/components/headings'
  import { InfoBox } from '../../../modules/presentational/components/info-box'
</script>

<div
  class="root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
  <H1 class="h1">Services</H1>

  <div class="info-boxes">
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="SMSF Setup"
      content="We offer administration services to facilitate SMSF establishment process. We can help you obtain all the required documentation and guide you through the process step by step to ensure its legal compliance." />
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="SMSF Administration"
      content="We take care of your or your clients’ day-to-day accounting and administration tasks. We can also attend to end of year compliance work including full set of financial statements, tax return and arranging an independent annual audit." />
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="SMSF Consulting Services"
      content="We provide factual information advice to help you keep up with legislation changes and meet compliance requirement. We work with financial advisors, accountants, trustees and auditors to clarify issues and solve problems." />
  </div>
</div>

<style lang="scss">
  .root {
    :global(.h1) {
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 1em;
    }
  }

  .info-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -20px;

    :global(.info-box) {
      flex: 1;
      min-width: 16rem;
      margin-top: 20px;
      margin-left: 20px;
    }
  }

  .bp-medium {
    :global(.h1) {
      font-size: 2.8rem;
      text-align: center;
    }

    :global(.info-box) {
      min-width: 20rem;
    }
  }
</style>
