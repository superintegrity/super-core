<li class="root {$$props.class}" class:selected>
  <a href={url} class:selected>
    <slot>{children}</slot>
  </a>
</li>

<script lang="ts">
  export let url = '/'
  export let selected = false
  export let children: string = ''
</script>

<style>
  a {
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;

    display: inline-block;
    padding: 15px 10px 60px;
  }

  a.selected {
    color: rgb(41, 43, 44);
    background-color: rgb(231, 233, 234);
    border-bottom: 2px solid var(--theme-primary-main, #03cce6);
  }
</style>
