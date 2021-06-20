<script lang="ts">
  import { envelope, mapMarker } from 'svelte-awesome/icons';
  import { ContactCard } from '../../../modules/presentational/components/contact-card';
  import { getConfig } from '../../../modules/config';

  const { ADDRESS, EMAIL } = getConfig();

</script>

<div class="contacts-card-root {$$props.class || ''}">
  <!-- <ContactCard class="contact-card" heading="Phone Number" icon={phone}>
    {PHONE_NUMBER}
  </ContactCard> -->
  <ContactCard class="contact-card" heading="Email Address" icon={envelope}>
    <a href="mailto:{EMAIL}">{EMAIL}</a>
  </ContactCard>
  <ContactCard class="contact-card" heading="Location" icon={mapMarker}>
    {#each ADDRESS as line}
      <div class="address-line">
        {line}
      </div>
    {/each}
  </ContactCard>
</div>

<style lang="scss">
  .contacts-card-root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -20px;
    margin-left: -20px;

    :global(.contact-card) {
      flex: 1;
      min-width: 30rem;
      margin-top: 20px;
      margin-left: 20px;
      padding: 30px;
      padding-left: clamp(20px, 5vw, 50px);
      padding-right: clamp(20px, 5vw, 50px);
    }

    a {
      color: #083940;
      text-decoration: none;
    }

    .address-line {
      white-space: nowrap;
      line-height: 150%;
    }
  }

</style>
