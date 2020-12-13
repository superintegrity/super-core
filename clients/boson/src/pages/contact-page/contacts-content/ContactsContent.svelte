<script lang="ts">
  import { phone, envelope, mapMarker } from 'svelte-awesome/icons'
  import { ContactCard } from '../../../modules/presentational/components/contact-card'
</script>

<div class="root {$$props.class || ''}">
  <ContactCard
    class="contact-card"
    heading="Phone Number"
    content="0430 777 699"
    icon={phone} />
  <ContactCard
    class="contact-card"
    heading="Email Address"
    content="info@superintegrity.com.au"
    icon={envelope} />
  <ContactCard
    class="contact-card"
    heading="Location"
    content="Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149"
    icon={mapMarker} />
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -20px;
    margin-left: -20px;

    :global(.contact-card) {
      min-width: 18em;
      max-width: 20em;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
</style>
