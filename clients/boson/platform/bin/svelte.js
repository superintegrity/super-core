#!/usr/bin/env node

const Yargs = require('yargs/yargs')
const { flow } = require('lodash')
const { copyImages } = require('../src/svelte')

function main() {
  const yargs = createYargs()

  yargs // eslint-disable-line @typescript-eslint/no-unused-expressions
    // .option('verbose', {
    //   alias: 'v',
    //   type: 'boolean',
    //   description: 'Run with verbose logging',
    // })
    .strict()
    .help().argv
}

/**
 * Refer to https://github.com/yargs/yargs/issues/1008
 *
 * @returns {import('yargs').Argv<{}>}
 */
function createYargs() {
  const yargs = Yargs(process.argv.slice(2))
  return flow([addCopyImagesCommand])(yargs).demandCommand()
}

/**
 * @param {import('yargs').Argv<{}>} yargs
 */
function addCopyImagesCommand(yargs) {
  return yargs
    .command(
      'copy-images',
      'Copy images from src to static',
      (subYargs) => {
        return subYargs
      },
      async () => {
        try {
          await copyImages()
          console.log(`Done`)
        } catch (ex) {
          console.error(ex)
          process.exit(1)
        }
      },
    )
    .demandCommand()
}

main()
