<script lang="ts">
  import { InfoCard } from '../../../modules/presentational/components/info-card'
  import { trophy, tv } from 'svelte-awesome/icons'
</script>

<div class="root {$$props.class || ''}">
  <div class="info-cards">
    <InfoCard
      class="info-card"
      heading="Advisors / Accountants"
      content="Your own the clients We do the work"
      detailUrl="/about"
      icon={trophy} />

    <InfoCard
      class="info-card"
      heading="Direct Trustees"
      content="You manage the fund We provide support"
      detailUrl="/contact"
      icon={tv} />
  </div>
</div>

<style lang="scss">
  .info-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -50px;
    margin-left: -20px;

    :global(.info-card) {
      min-width: 16em;
      max-width: 20em;
      margin-top: 50px;
      margin-left: 20px;
    }
  }
</style>
