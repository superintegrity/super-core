import ServiceCards from './ServiceCards.svelte';

export default {
  title: 'Presentational/ServiceCards',
  component: ServiceCards,
};

export const Default = () => Mobile();

const Mobile = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).style.width = '320px';
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '2400px';
  });

  return {
    Component: ServiceCards,
  };
};

export const Desktop = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '1100px';
  });
  return {
    Component: ServiceCards,
  };
};
