<script lang="ts">
  import { SummaryH1 } from '../summary-headings';
  import { getConfig } from '../../../config';

  const { ADDRESS, EMAIL } = getConfig();
</script>

<div class="root {$$props.class || ''}">
  <SummaryH1 class="summary-h1">Contact Us</SummaryH1>

  <h2>Address:</h2>
  <p>{ADDRESS}</p>

  <!-- <h2>Phone:</h2>
  <p class="phone">{PHONE_NUMBER}</p> -->

  <h2>Email:</h2>
  <p class="email"><a href="mailto:{EMAIL}">{EMAIL}</a></p>
</div>

<style lang="scss">
  .root :global(.summary-h1) {
    margin-bottom: 10%;
  }

  h2 {
    color: #7dd7e2;
    font-weight: 400;
    font-size: 1.8rem;
    margin: 0.7em 0;
  }

  p {
    color: #bfbfbf;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.3em;
  }

  p.phone,
  p.email {
    color: #bfbfbf;
    font-weight: 500;

    a {
      color: #bfbfbf;
      text-decoration: none;
    }
  }
</style>
