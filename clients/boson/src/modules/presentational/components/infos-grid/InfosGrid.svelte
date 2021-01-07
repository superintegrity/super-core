<script lang="ts">
  import accountantImage from './images/accountant@3x.png'
  import trusteeImage from './images/trustee@3x.png'
</script>

<div class="infos-grid-root {$$props.class || ''}">
  <div class="row odd">
    <div class="cell cell-1">
      <img src={accountantImage} alt="accountants" />
    </div>

    <div class="cell cell-2">
      <section>
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
      <section>
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
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row.odd {
    .cell-1 {
      order: 2;
    }

    .cell-2 {
      order: 1;
    }
  }

  img {
    object-position: center top;
    object-fit: cover;
    width: 100%;
    max-height: 400px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 167%;
    color: rgba(0, 0, 0, 0.69);
  }

  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 167%;
    color: rgba(0, 0, 0, 0.44);
  }
</style>
