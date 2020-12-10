/**
 * Dispatch event on click outside of node
 *
 * @param {HTMLElement} node
 *  - key is the css class name, value is the minimum width
 */
export function clickOutside(node) {
  /**
   *
   * @param {MouseEvent} event
   */
  const handleClick = (event) => {
    if (
      node &&
      !node.contains(/** @type {any} */ (event.target)) &&
      !event.defaultPrevented
    ) {
      node.dispatchEvent(new CustomEvent('clickOutside'))
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    },
  }
}
