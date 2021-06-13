<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ContactCard from './ContactCard.svelte';
  import { phone, envelope, mapMarker } from 'svelte-awesome/icons';

</script>

<Meta
  title="Presentational/ContactCard"
  component={ContactCard}
  parameters={{
    docs: {
      iframeHeight: 300,
    },
  }}
/>

<Story name="Default">
  <ContactCard heading="Phone Number" icon={phone}>0430 777 699</ContactCard>
</Story>

<Story name="EmailAddress">
  <ContactCard heading="Email Address" icon={envelope}>
    info@superintegrity.com.au
  </ContactCard>
</Story>

<Story name="Location">
  <ContactCard heading="Location" icon={mapMarker}>
    Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149
  </ContactCard>
</Story>
