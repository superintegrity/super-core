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
  .root {
    a {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #a9977b;

      text-decoration: none;

      padding: 5px 10px;

      &.selected {
        background-color: rgb(246, 245, 245);
      }
    }
  }
</style>
