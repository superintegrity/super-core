#!/usr/bin/env node

const assert = require('assert');
const Yargs = require('yargs/yargs');
const { flow } = require('lodash');
const { makeLogger } = require('../libs/effects/console-logger');
const { loadEnv } = require('../../config');

loadEnv();
const { makeAws } = require('../libs/aws');

function main() {
  const yargs = createYargs();

  yargs // eslint-disable-line no-unused-expressions
    .option('verbose', {
      alias: 'v',
      type: 'boolean',
      description: 'Run with verbose logging',
    })
    .option('realm', {
      type: 'string',
      description: 'realm: dev or prod',
      demand: true,
    })
    .option('env', {
      type: 'string',
      description: 'env: staging, green, blue, etc.',
      demand: true,
    })
    .strict()
    .help().argv;
}

/**
 * @returns {import('yargs').Argv<{}>}
 */
function createYargs() {
  // https://github.com/yargs/yargs/issues/1008

  const yargs = Yargs(process.argv.slice(2));
  return flow([addDeployCommand, addUndeployCommand])(yargs).demandCommand();
}

/**
 * @param {import('yargs').Argv<{}>} yargs
 */
function addDeployCommand(yargs) {
  return yargs
    .command(
      'deploy',
      'Deploy',
      deployYargs => {
        return deployYargs.option('skip-s3-sync', {
          type: 'boolean',
          demand: false,
        });
      },
      /**
       * @param {any} argv
       */
      async ({ verbose, realm, env, skipS3Sync }) => {
        assert(typeof realm === 'string');
        assert(typeof env === 'string');
        assert(env !== 'local', `env: ${env} is invalid`);

        const logger = makeLogger({
          verbose,
        });
        const { deploy } = makeAws({ logger });

        try {
          await deploy({ realm, env, skipS3Sync });
        } catch (ex) {
          logger.error(ex);
          process.exit(1);
        }
      },
    )
    .demandCommand();
}

/**
 * @param {import('yargs').Argv<{}>} yargs
 */
function addUndeployCommand(yargs) {
  return yargs
    .command(
      'undeploy',
      'Undeploy',
      {},
      /**
       * @param {any} argv
       */
      async ({ verbose, realm, env }) => {
        assert(typeof realm === 'string');
        assert(typeof env === 'string');
        assert(env !== 'local', `env: ${env} is invalid`);

        const logger = makeLogger({
          verbose,
        });
        const { undeploy } = makeAws({ logger });

        try {
          await undeploy({ realm, env });
        } catch (ex) {
          logger.error(ex);
          process.exit(1);
        }
      },
    )
    .demandCommand();
}

main();
