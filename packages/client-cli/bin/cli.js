#!/usr/bin/env node

const Yargs = require('yargs/yargs')
const { flow } = require('lodash')
const { createComponent } = require('../src/svelte')

function main() {
  const yargs = createYargs()

  yargs // eslint-disable-line @typescript-eslint/no-unused-expressions
    .option('verbose', {
      alias: 'v',
      type: 'boolean',
      description: 'Run with verbose logging',
    })
    .strict()
    .help().argv
}

/**
 * @returns {import('yargs').Argv<{}>}
 */
function createYargs() {
  // https://github.com/yargs/yargs/issues/1008
  const yargs = Yargs(process.argv.slice(2))
  return flow([addSvelteCommand])(yargs).demandCommand()
}

/**
 * @param {import('yargs').Argv<{}>} yargs
 */
function addSvelteCommand(yargs) {
  return yargs
    .command('svelte', 'Svelte commands', (svelteYargs) => {
      return flow([addSvelteCreateComponentCommand])(
        svelteYargs,
      ).demandCommand()
    })
    .demandCommand()
}

/**
 * @param {import('yargs').Argv<{}>} yargs
 */
function addSvelteCreateComponentCommand(yargs) {
  return yargs
    .command(
      'create-component',
      'Create svelte component',
      (subYargs) => {
        return subYargs.option('destination', {
          type: 'string',
          description: 'Destination path for blocked postcodes',
          demandOption: true,
        })
      },
      /**
       * @param {any} input
       */
      async ({ destination }) => {
        try {
          await createComponent({ destination })
        } catch (ex) {
          console.error(ex)
          process.exit(1)
        }
      },
    )
    .demandCommand()
}

main()
