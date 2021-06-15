const nodeConfig = require('config').util.toObject()

const buildtimeEnvConfig = Object.keys(nodeConfig).reduce(
  (accumulator, key) => {
    if (process.env[key] !== undefined) {
      accumulator[key] = process.env[key]
    }

    return accumulator
  },
  /** @type {Record<string, string | undefined>} */ ({}),
)

/**
 * JSON.stringify all non string settings/configs
 *
 * @param {Record<string, any>=} overrides
 */
function getEnv(overrides) {
  const allConfigs = {
    ...nodeConfig,
    ...buildtimeEnvConfig,

    REALM: process.env.REALM,
    ENV: process.env.ENV,

    ...overrides,
  }

  return Object.entries(allConfigs).reduce(
    (accumulator, [key, value]) => {
      if (value === null) {
        accumulator[key] = ''
      } else {
        accumulator[key] =
          typeof value !== 'string' ? JSON.stringify(value) : value
      }
      return accumulator
    },
    /** @type {Record<string, string | undefined>} */ ({}),
  )
}

/**
 * @param {Record<string, any>=} overrides
 */
function loadEnv(overrides) {
  const env = getEnv(overrides)
  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value
  })

  return env
}

module.exports = { getEnv, loadEnv }
