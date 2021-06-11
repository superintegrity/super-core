<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ContactCard from './ContactCard.svelte';
  import { phone, envelope, mapMarker } from 'svelte-awesome/icons';

</script>

<Meta
  title="Sample/ContactCard"
  component={ContactCard}
  parameters={{
    docs: {
      iframeHeight: 300,
    },
  }}
/>

<Story name="Default">
  <ContactCard heading="Phone Number" content="0430 777 699" icon={phone} />
</Story>

<Story name="EmailAddress">
  <ContactCard
    heading="Email Address"
    content="info@superintegrity.com.au"
    icon={envelope}
  />
</Story>

<Story name="Location">
  <ContactCard
    heading="Location"
    content="Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149"
    icon={mapMarker}
  />
</Story>
