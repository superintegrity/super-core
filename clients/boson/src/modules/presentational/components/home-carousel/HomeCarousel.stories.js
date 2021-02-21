import HomeCarousel from './HomeCarousel.svelte';

export default {
  title: 'Presentational/HomeCarousel',
  component: HomeCarousel,
  parameters: {
    docs: {
      iframeHeight: 800,
    },
  },
};

export const Default = () => {
  return {
    Component: HomeCarousel,
    props: {},
  };
};
