<DefaultLayout currentUrl="/about">
  <div class="banner">
    <div class="overlay" />
    <img src={aboutImageSrc} alt="banner" />
  </div>
  <section>
    <PageSummary
      imageSrc={summaryImageSrc}
      heading="We help our customer to build Digital World"
      content="Maecenas quis neque libero. Class aptent taciti.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac." />
  </section>

  <section>
    <KeyPointsContent />
  </section>
</DefaultLayout>

<script lang="ts">
  import { DefaultLayout } from '../default-layout'
  import { PageSummary } from '../presentational/components/page-summary'
  import summaryImageSrc from './images/summary.png'
  import { KeyPointsContent } from './key-points-content'
  import aboutImageSrc from './images/about.jpg'
</script>

<style type="text/scss">
  section {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    padding-left: 5%;
    padding-right: 5%;
  }

  .banner {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.3;
  }

  img {
    width: 100%;
    height: 220px;
    object-position: center top;
    object-fit: cover;
  }
</style>
