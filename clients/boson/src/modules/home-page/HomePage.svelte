<DefaultLayout currentUrl="/">
  <div class="banner">
    <Carousel />
  </div>

  <section class="summary">
    <PageSummary
      heading="We help our customer to build Digital World"
      content="Maecenas quis neque libero. Class aptent taciti.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac." />
  </section>

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

  <section class="services">
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
  </section>
</DefaultLayout>

<script lang="ts">
  import { DefaultLayout } from '../default-layout'
  import { InfoCard } from '../presentational/components/info-card'
  import { trophy, thumbsUp, tv, laptop } from 'svelte-awesome/icons'
  import { H1 } from '../presentational/components/headings'
  import { InfoBox } from '../presentational/components/info-box'
  import { Carousel } from '../presentational/components/carousel'
  import PageSummary from '../presentational/components/page-summary/PageSummary.svelte'
</script>

<style type="text/scss">
  section {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    padding-left: 5%;
    padding-right: 5%;
  }

  div.banner {
    margin-top: 16px;
    display: block;
  }

  section.info-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    :global(.info-card) {
      width: 18rem;
      margin-top: 20px;
    }

    :global(.info-card + .info-card) {
      margin-left: 20px;
    }
  }

  section.services {
    :global(.h1) {
      text-align: center;
    }
  }

  .info-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -20px;

    :global(.info-box) {
      flex: 1;
      min-width: 20rem;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
</style>
