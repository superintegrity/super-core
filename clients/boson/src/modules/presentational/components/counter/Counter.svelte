<script lang="ts">
  import { decrement, increment } from '../../../count'

  // import camelCase from 'camelcase'
  export let count = 0

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  setTimeout(async () => {
    console.log('*****  paul debug 81')
    await delay(2000)
    console.log('*****  paul debug 82')
  })
</script>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>

<button
  on:click={() => {
    count = increment(count)
  }}>
  Clicks:
  {count}
</button>

<button
  on:click={() => {
    count = decrement(count)
  }}>
  Decrement
</button>
