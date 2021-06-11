<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import NavItem2 from './NavItem2.svelte';

</script>

<Meta title="Presentational/NavItem2" component={NavItem2} />

<Story name="NotSelected">
  <ul>
    <NavItem2 class="bp-medium">About</NavItem2>
  </ul>
</Story>

<Story name="Selected">
  <ul>
    <NavItem2 class="bp-medium" selected>Home</NavItem2>
  </ul>
</Story>

<Story name="SelectedMobile">
  <ul>
    <NavItem2 selected>Home</NavItem2>
  </ul>
</Story>
