<script lang="ts">
  import NavItem from '../nav-item/NavItem.svelte'
</script>

<style>
  .root {
    height: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<ul class="root">
  <NavItem url="/">Home</NavItem>
  <NavItem url="/service">Services</NavItem>
  <NavItem url="/about">About</NavItem>
  <NavItem url="/blog">Blog</NavItem>
  <NavItem url="/contact">Contact</NavItem>
</ul>
