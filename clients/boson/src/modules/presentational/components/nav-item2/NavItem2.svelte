<script lang="ts">
  export let url = '/'
  export let selected = false
  export let children: string = ''
</script>

<li class="root {$$props.class || ''}">
  <a href={url} class:selected>
    <slot>{children}</slot>
  </a>
</li>

<style lang="scss">
  a {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    color: #a9977b;
    display: inline-block;

    text-decoration: none;
    width: 100%;
    text-align: center;

    padding: 0.5em 0.75em;

    &.selected {
      background-color: rgb(246, 245, 245);
    }
  }

  // Set by parent nav-bar
  .bp-medium {
    a {
      width: auto;
    }
  }
</style>
