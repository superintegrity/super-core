<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import smsfSrc from './images/smsf.jpg';
  import ServiceCard from './ServiceCard.svelte';

</script>

<Meta
  title="Presentational/ServiceCard"
  component={ServiceCard}
  parameters={{
    docs: {
      iframeHeight: 600,
    },
  }}
/>

<Story name="Default">
  <ServiceCard imageSrc={smsfSrc} heading="SMSF Setup">
    We offer administration services to facilitate SMSF establishment process,
    including ABN and TFN application if required. We can help you obtain all
    the required documentation and guide you through the process step by step to
    ensure its legal compliance.
  </ServiceCard>
</Story>
