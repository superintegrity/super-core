/**
 * @param {string} id
 * @param {string} domString
 */
export function setSlot(id, domString) {
  const container = document.querySelector(`#${id}`)
  if (container) {
    container.innerHTML = domString
  }
}
