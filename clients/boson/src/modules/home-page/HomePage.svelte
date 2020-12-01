<DefaultLayout currentUrl="/">
  <div class="banner">
    <Carousel />
  </div>

  <section class="summary">
    <PageSummary
      heading="We help our customer to build Digital World"
      content="Maecenas quis neque libero. Class aptent taciti.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac." />
  </section>

  <section>
    <KeyPointsContent />
  </section>

  <section>
    <ServicesContent />
  </section>

  <section class="blogs">
    <BlogsContent />
  </section>
</DefaultLayout>

<script lang="ts">
  import { DefaultLayout } from '../default-layout'
  import { Carousel } from '../presentational/components/carousel'
  import { PageSummary } from '../presentational/components/page-summary'

  import { ServicesContent } from './services-content'
  import { KeyPointsContent } from './key-points-content'
  import { BlogsContent } from './blogs-content'
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
  }
</style>
