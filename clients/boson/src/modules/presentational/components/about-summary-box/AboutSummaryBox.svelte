<script lang="ts">
  import { SummaryH1 } from '../summary-headings';

</script>

<div class="about-summary-box-root {$$props.class || ''}">
  <SummaryH1 class="summary-h1">About Us</SummaryH1>
  <p>
    <i>We are</i> registered tax agents, IPAs, CPAs and SMSF specialist advisors.
  </p>

  <p>
    <i>We deliver</i> a comprehensive range of SMSF services to help our clients
    manage their funds more efficiently and successfully.
  </p>
</div>

<style lang="scss">
  .about-summary-box-root {
    :global(.summary-h1) {
      margin-bottom: 15px;
    }

    p {
      color: #bfbfbf;
      /* letter-spacing: 1px; */

      color: #bfbfbf;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 142%;
    }

    i {
      color: #7dd7e2;
    }

    p + p {
      margin-top: 10px;
    }
  }

</style>
