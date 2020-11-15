<script>
  import { Counter } from '../modules/presentational'
  import { DefaultLayout } from '../modules/default-layout'
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>

<DefaultLayout>
  <h1>Hello world!</h1>

  <Counter count={11} />
  <p>
    Visit the
    <a href="https://svelte.dev">svelte.dev</a>
    to learn how to build Svelte apps.
  </p>
</DefaultLayout>
