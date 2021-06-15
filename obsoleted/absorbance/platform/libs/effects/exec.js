const execSh = require('exec-sh').promise

/**
 *
 * @param {object} input
 * @param {import('../logger').ILogger } input.logger
 */
const makeExec = ({ logger }) =>
  /**
   * @param {string[]} command
   * @param {true | { dryRun?: boolean }=} options
   * @returns {Promise<any> | undefined}
   */
  (command, options) => {
    const commandText = command.join(' ')

    logger.debug(commandText)

    if (typeof options !== 'object' || !options.dryRun) {
      return execSh(commandText, options)
    }

    return undefined
  }

module.exports = {
  makeExec,
}
