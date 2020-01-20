/* eslint-disable no-console */

/**
 *
 * @param {object} input
 * @param {boolean} input.verbose
 * @returns {import("../logger").ILogger}
 */
function makeLogger({ verbose }) {
  return {
    debug: verbose
      ? console.debug.bind(console)
      : () => {
          /* do nothing. */
        },
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
  }
}

module.exports = {
  makeLogger,
}
