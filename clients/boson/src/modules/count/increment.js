/**
 * @param {number} count
 */
export const increment = (count) => {
  return count + 1
}

/**
 * @param {number} ms
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

setTimeout(async () => {
  console.log('******* paul debug 1')
  await delay(2000)
  console.log('******* paul debug 2')
})
