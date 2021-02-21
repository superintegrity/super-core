import ServicesContent from './ServicesContent.svelte';

export default {
  title: 'Page/Home/ServicesContent',
  component: ServicesContent,
};

export const Default = () => Mobile();

const Mobile = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).style.width = '320px';
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '1450px';
  });

  return {
    Component: ServicesContent,
  };
};

export const Desktop = () => {
  setTimeout(() => {
    /** @type {any} */ (window.frameElement).closest('div').style.height =
      '800px';
  });

  return {
    Component: ServicesContent,
  };
};
