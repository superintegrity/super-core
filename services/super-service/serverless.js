/**
 * @type {import('@serverless/typescript').AWS}
 */
const serverlessConfiguration = {
  service: 'super-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    region: 'ap-southeast-2',
    runtime: 'nodejs12.x',
    // We have staging already, and we don't have multiple accounts
    versionFunctions: false,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      handler: 'handlers/hello/index.handle',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          },
        },
      ],
    },
  },
}

module.exports = serverlessConfiguration
