/**
 * Notes:
 * 1. Do not use destructuring due to the Webpack DefinePlugin limitation
 * 2. Do not do type conversions here, do conversions before the usage.
 */

module.exports = {
  DOMAIN: process.env.DOMAIN,
  SSL_CERTIFICATE_ARN: process.env.SSL_CERTIFICATE_ARN,
  IS_MAIN_CLOUDFRONT: process.env.IS_MAIN_CLOUDFRONT,
  NODE_ENV: process.env.NODE_ENV,
  REALM: process.env.REALM,
  ENV: process.env.ENV,
}
