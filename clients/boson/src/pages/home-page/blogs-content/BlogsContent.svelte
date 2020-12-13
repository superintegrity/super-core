<script lang="ts">
  import { H1 } from '../../../modules/presentational/components/headings'
  import { BlogCard } from '../../../modules/presentational/components/blog-card'

  import g1Src from './images/g1.jpg'
  import g4Src from './images/g4.jpg'
  import g7Src from './images/g7.jpg'
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../modules/container-query'
</script>

<div
  class="root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}>
  <H1 class="h1">Blogs</H1>
  <div class="blog-cards">
    <BlogCard
      class="blog-card"
      imageSrc={g1Src}
      heading="Responsive"
      summary="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
    <BlogCard
      class="blog-card"
      imageSrc={g4Src}
      heading="Responsive"
      summary="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
    <BlogCard
      class="blog-card"
      imageSrc={g7Src}
      heading="Responsive"
      summary="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." />
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

  .blog-cards {
    :global(.blog-card) {
      margin-top: 20px;
    }
  }

  .bp-medium {
    :global(.h1) {
      font-size: 2.8rem;
      text-align: center;
    }
  }
</style>
