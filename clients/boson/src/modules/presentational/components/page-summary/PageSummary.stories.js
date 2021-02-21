import PageSummary from './PageSummary.svelte';
import DefaultStory from './stories/DefaultStory.svelte';

export default {
  title: 'Presentational/PageSummary',
  component: PageSummary,
};

export const Default = () => Mobile();

export const Mobile = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).style.width = '320px';
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '1050px';
  });

  return {
    Component: DefaultStory,
  };
};

export const Desktop = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '550px';
  });
  return {
    Component: DefaultStory,
  };
};
