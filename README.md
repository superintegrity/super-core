# Super Integrity

```sh
npm install
npm test
```

## Project naming convention

https://en.wikipedia.org/wiki/Glossary_of_engineering

## Design Decisions

1. Cannot use `svelte-themer` which does not work with SSR. The `<svelte:component this={ThemeWrapper}` works but cause flickering when navigate.
