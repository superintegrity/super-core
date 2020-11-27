<div class="root {$$props.class}">
  <SummaryH1 class="summary-h1">Contact Us</SummaryH1>

  <h2>Address:</h2>
  <p>No.27 - 5549436 street lorem ipsum, ipsum City, Country</p>

  <h2>Phone:</h2>
  <p class="phone">0408 123 456</p>

  <h2>Email:</h2>
  <p class="email">info@superintegrity.com.au</p>
</div>

<script lang="ts">
  import { SummaryH1 } from '../summary-headings'
</script>

<style>
  .root :global(.summary-h1) {
    margin-bottom: 20px;
  }

  h2 {
    color: #7dd7e2;
    font-weight: 400;
    font-size: 0.9em;
    margin: 0.7em 0;
  }

  p {
    color: #bfbfbf;
    font-weight: 400;
    font-size: 0.9em;
  }

  p.phone,
  p.email {
    color: #bfbfbf;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }
</style>
