import { assert } from '../assert'

/**
 * @param {string=} env
 */
export const getConfig = (env) => {
  assert(
    !env || env === 'staging' || env === 'green',
    `env: ${env} is not supported`,
  )

  return {
    ...DEFAULT,
    ...(env ? CONFIGS[env] : {}),
  }
}

const DEFAULT = {
  MAP_API_KEY: `AIzaSyAVZcp3tZikbfWLKqysbMv2jeHfRogn7dw`,
}

/** @type {Record<string, any>} */
const CONFIGS = {
  staging: {},
  green: {},
}
