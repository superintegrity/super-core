<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Counter from './Counter.svelte';
</script>

<Meta title="Sample/Counter" component={Counter} />

<Story name="Default">
  <Counter />
</Story>

<Story name="Has Initial Count">
  <Counter count={11} />
</Story>
