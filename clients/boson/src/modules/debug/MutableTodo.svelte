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

<!-- the text will flash red whenever the `todo` object changes -->
<div bind:this="{div}" on:click>{todo.done ? '=' : ''} {todo.text}</div>

<style>
  div {
    cursor: pointer;
    line-height: 1.5;
  }
</style>
