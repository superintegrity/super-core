<script lang="ts">
</script>

<div class="site-map-root {$$props.class || ''}">
  <div class="links">
    <a href="/">Home</a> | <a href="/service">Services</a> |
    <a href="/about">About</a>
    | <a href="/contact">Contact</a>
  </div>
</div>

<style lang="scss">
  .site-map-root {
    color: #bfbfbf;
    font-weight: 400;
    font-size: 1.6rem;

    .links {
      margin-left: auto;
      margin-right: auto;
      max-width: 30rem;
      display: flex;
      justify-content: space-around;
    }

    a,
    a:visited {
      color: #bfbfbf;
    }

    a {
      text-decoration: none;
    }
  }

</style>
