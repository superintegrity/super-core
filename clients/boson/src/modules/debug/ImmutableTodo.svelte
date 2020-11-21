<!-- the text will flash red whenever the `todo` object changes -->
<div bind:this="{div}" on:click>{todo.done ? '=' : ''} {todo.text}</div>

<!-->
  div {
    cursor: pointer;
    line-height: 1.5;
  }
</!-->

<!-- 
  This is not needed, because I have enabled this globally via @sveltejs+snowpack-config
  <svelte:options immutable={true}/> 
-->
<script lang="ts">
  import { afterUpdate } from 'svelte'
  import flash from './flash.js'
  import type { ITodo } from './ITodo.js'

  export let todo: ITodo

  let div: HTMLDivElement

  afterUpdate(() => {
    flash(div)
  })
</script>

<style>
  div {
    margin: 10px;
  }
</style>
