<div class="root {$$props.class}" use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
  <H1 class="h1">Services</H1>
  <div class="info-boxes">
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="Responsive"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="Responsive"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="Responsive"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
    <InfoBox
      class="info-box"
      icon={laptop}
      heading="Responsive"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
  </div>
</div>

<script lang="ts">
  import { laptop } from 'svelte-awesome/icons'
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../container-query'
  import { H1 } from '../../presentational/components/headings'
  import { InfoBox } from '../../presentational/components/info-box'
</script>

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
