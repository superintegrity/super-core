import InfosGrid from './InfosGrid.svelte';

export default {
  title: 'Presentational/InfosGrid',
  component: InfosGrid,
};

export const Default = () => Mobile();

const Mobile = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).style.width = '320px';
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '850px';
  });

  return {
    Component: InfosGrid,
  };
};

export const Desktop = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '700px';
  });
  return {
    Component: InfosGrid,
  };
};
