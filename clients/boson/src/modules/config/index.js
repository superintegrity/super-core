import { assert } from '../assert';

/**
 * @param {string=} env
 * @returns {typeof DEFAULT}
 */
export const getConfig = (env) => {
  assert(
    !env || env === 'staging' || env === 'green',
    `env: ${env} is not supported`,
  );

  return {
    ...DEFAULT,
    ...(env ? CONFIGS[env] : {}),
  };
};

const DEFAULT = {
  MAP_API_KEY: `AIzaSyAVZcp3tZikbfWLKqysbMv2jeHfRogn7dw`,
  ADDRESS: ['Suite 2.17/203-205 Blackburn Rd', 'Mount Waverley VIC 3149'],
  EMAIL: 'info@superintegrity.com.au',
};

/** @type {Record<string, any>} */
const CONFIGS = {
  staging: {},
  green: {},
};
