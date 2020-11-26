<DefaultLayout currentUrl="/">
  <h1>Hello world!</h1>

  <section class="info-cards">
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
  </section>
</DefaultLayout>

<script lang="ts">
  import { DefaultLayout } from '../default-layout'
  import { InfoCard } from '../presentational/components/info-card'
  import { trophy, thumbsUp, tv } from 'svelte-awesome/icons'
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  .info-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .info-cards :global(.info-card) {
    flex: 1;
    min-width: 20rem;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
