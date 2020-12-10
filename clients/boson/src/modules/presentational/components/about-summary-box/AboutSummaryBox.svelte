<div class="root {$$props.class || ''}">
  <SummaryH1 class="summary-h1">About Us</SummaryH1>
  <p>
    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. lacinia
    eget consectetur sed, convallis at tellus.
  </p>
</div>

<script lang="ts">
  import { SummaryH1 } from '../summary-headings'
</script>

<style lang="scss">
  .root :global(.summary-h1) {
    margin-bottom: 20px;
  }

  p {
    color: #bfbfbf;
    font-size: 0.9rem;
    line-height: 2em;
    letter-spacing: 1px;
    font-weight: 300;
  }
</style>
