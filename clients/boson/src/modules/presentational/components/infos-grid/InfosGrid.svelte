<script lang="ts">
  import {
    containerQuery,
    DEFAULT_BREAKPOINT_INFOS,
  } from '../../../container-query'

  import accountantImage from './images/accountant@3x.png'
  import trusteeImage from './images/trustee@3x.png'
</script>

<div
  class="infos-grid-root {$$props.class || ''}"
  use:containerQuery={DEFAULT_BREAKPOINT_INFOS}
>
  <div class="row odd">
    <div class="cell cell-1">
      <img src={accountantImage} alt="accountants" />
    </div>

    <div class="cell cell-2">
      <section class="description">
        <h1>Advisers & Accountants</h1>
        <ul>
          <li>Back office & technical support</li>
          <li>Opportunities of business expansion</li>
          <li>Flexible software options & free transfer</li>
        </ul>
      </section>
    </div>
  </div>

  <div class="row even">
    <div class="cell cell-1"><img src={trusteeImage} alt="trustees" /></div>

    <div class="cell cell-2">
      <section class="description">
        <h1>SMSF Trustees</h1>
        <ul>
          <li>Professional guidance & ongoing support</li>
          <li>Independent advice & second opinion</li>
          <li>Go-to person & ad-hoc enquiries</li>
        </ul>
      </section>
    </div>
  </div>
</div>

<style lang="scss">
  .infos-grid-root {
    background-color: rgb(245, 245, 245);
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cell {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
  }

  .description {
    margin-left: 10px;
    margin-right: 10px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 116%;
    color: rgba(0, 0, 0, 0.69);
    margin-top: 1em;
    // text-align: center;
  }

  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.44);
    margin-top: 1em;
    margin-bottom: 1em;
    // text-align: center;
  }

  li {
    margin-top: 0.6em;
  }

  .bp-medium {
    .row.odd {
      .cell-1 {
        order: 2;
      }

      .cell-2 {
        order: 1;
      }
    }

    h1 {
      font-size: 3rem;
    }
  }
</style>
