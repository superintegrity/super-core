<script lang="ts">
  import { SummaryH1 } from '../summary-headings';
</script>

<div class="about-summary-boxy-root {$$props.class || ''}">
  <SummaryH1 class="summary-h1">About Us</SummaryH1>
  <p>
    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. lacinia
    eget consectetur sed, convallis at tellus.
  </p>
</div>

<style lang="scss">
  .about-summary-boxy-root {
    :global(.summary-h1) {
      margin-bottom: 20px;
    }

    p {
      color: #bfbfbf;
      font-size: 1.8rem;
      line-height: 1.9;
      letter-spacing: 1px;
      font-weight: 300;
    }
  }
</style>
