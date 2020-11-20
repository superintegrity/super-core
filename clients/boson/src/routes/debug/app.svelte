<script lang="ts">
  import ImmutableTodo from '../../modules/debug/ImmutableTodo.svelte'
  import type { ITodo } from '../../modules/debug/ITodo'
  import MutableTodo from '../../modules/debug/MutableTodo.svelte'

  $: todos = [
    { id: 1, done: true, text: 'wash the car' },
    { id: 2, done: false, text: 'take the dog for a walk' },
    { id: 3, done: false, text: 'mow the lawn' },
  ] as ITodo[]

  function toggle(id: number) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        // return a new object
        return {
          id,
          done: !todo.done,
          text: todo.text,
        }
      }

      // return the same object
      return todo
    })
  }

  function addTodo() {
    todos = todos.concat({
      id: todos.length + 1,
      done: false,
      text: 'new todo',
    })
  }
</script>

<h2>Immutable</h2>
{#each todos as todo}
  <ImmutableTodo todo="{todo}" on:click="{() => toggle(todo.id)}" />
{/each}

<h2>Mutable</h2>
{#each todos as todo}
  <MutableTodo todo="{todo}" on:click="{() => toggle(todo.id)}" />
{/each}

<hr />

<button on:click="{addTodo}">+</button>
