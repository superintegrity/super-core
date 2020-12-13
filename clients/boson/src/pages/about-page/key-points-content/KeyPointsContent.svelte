<script lang="ts">
  import { InfoCard } from '../../../modules/presentational/components/info-card'
  import { trophy, thumbsUp, tv } from 'svelte-awesome/icons'
</script>

<div class="root {$$props.class || ''}">
  <div class="info-cards">
    <InfoCard
      class="info-card"
      heading="Stylish Design"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      detailUrl="/about"
      icon={trophy} />

    <InfoCard
      class="info-card"
      heading="Excellent Support"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      detailUrl="/service"
      icon={thumbsUp} />

    <InfoCard
      class="info-card"
      heading="Responsive"
      content="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
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
