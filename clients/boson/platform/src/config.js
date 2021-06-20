/** @type {import('assert')} */
const assert = require('assert');

/**
 * @param {string=} env
 */
const getConfig = (env) => {
  assert(
    env === 'staging' || env === 'green' || env === 'paul1',
    `env: ${env} is not supported`,
  );

  return {
    ...DEFAULT,
    ...(env ? CONFIGS[env] : {}),
  };
};

const DEFAULT = {
  DOMAIN: 'superintegrity.com.au',
  SSL_CERTIFICATE_ARN:
    'arn:aws:acm:us-east-1:345048411356:certificate/5905f093-b68b-4e2f-ac84-b8edfbea9e9a',
  HOSTED_ZONE_ID: 'Z362QOY9A0NIWG',
  IS_MAIN_CLOUDFRONT: false,
  REALM: process.env.REALM,
  ENV: process.env.ENV,
};

const CONFIGS = {
  paul1: {},
  staging: {},
  green: {
    IS_MAIN_CLOUDFRONT: false,
  },
};

module.exports = { getConfig };
