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
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;
    width: 100%;
    padding: 15px 10px;
    display: inline-block;
    text-align: center;
  }

  a.selected {
    color: rgb(41, 43, 44);
    background-color: rgb(231, 233, 234);
    border-bottom: 2px solid var(--theme-primary-main, #03cce6);
  }

  // Set by parent nav-bar
  .bp-medium {
    a {
      width: auto;
      padding: 15px 10px 60px;
    }
  }
</style>
