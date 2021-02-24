import ServiceCard from './ServiceCard.svelte';
import smsfSrc from './images/smsf@3x.png';

export default {
  title: 'Presentational/ServiceCard',
  component: ServiceCard,
};

export const Default = () => Mobile();

const Mobile = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).style.width = '320px';
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '600px';
  });

  return {
    Component: ServiceCard,
    props: {
      imageSrc: smsfSrc,
      heading: 'SMSF Setup',
      children:
        'We offer administration services to facilitate SMSF establishment ' +
        'process, including ABN and TFN application if required. We can help ' +
        'you obtain all the required documentation and guide you through the ' +
        'process step by step to ensure its legal compliance.',
    },
  };
};

export const Desktop = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '300px';
  });
  return {
    Component: ServiceCard,
    props: {
      imageSrc: smsfSrc,
      heading: 'SMSF Setup',
      children:
        'We offer administration services to facilitate SMSF establishment ' +
        'process, including ABN and TFN application if required. We can help ' +
        'you obtain all the required documentation and guide you through the ' +
        'process step by step to ensure its legal compliance.',
    },
  };
};
