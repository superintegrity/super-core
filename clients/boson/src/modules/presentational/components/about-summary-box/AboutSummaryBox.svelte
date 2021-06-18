<script lang="ts">
  import { SummaryH1 } from '../summary-headings';

</script>

<div class="about-summary-box-root {$$props.class || ''}">
  <SummaryH1 class="summary-h1">About Us</SummaryH1>
  <p>We are registered tax agents, IPAs, CPAs and SMSF specialist advisors.</p>
  <p>
    We deliver a comprehensive range of SMSF services to help our clients manage
    their funds more efficiently and successfully.
  </p>
</div>

<style lang="scss">
  .about-summary-box-root {
    :global(.summary-h1) {
      margin-bottom: 20px;
    }

    p {
      color: #bfbfbf;
      font-size: 1.4rem;
      line-height: 1.5em;
      letter-spacing: 1px;
      font-weight: 400;
    }

    p + p {
      margin-top: 10px;
    }
  }

</style>
