import RecommendationCarousel from './RecommendationCarousel.svelte';

export default {
  title: 'Presentational/RecommendationCarousel',
  component: RecommendationCarousel,
};

export const Default = () => Mobile();

const Mobile = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).style.width = '320px';
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '850px';
  });

  return {
    Component: RecommendationCarousel,
  };
};

export const Desktop = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '900px';
  });
  return {
    Component: RecommendationCarousel,
  };
};
